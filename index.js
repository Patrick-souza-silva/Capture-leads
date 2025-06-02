const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.goto('https://www.google.com/maps', { waitUntil: 'domcontentloaded' });

  // Aceitar cookies se aparecer
  try {
    const acceptButton = await page.waitForSelector('button[aria-label="Aceitar tudo"]', { timeout: 5000 });
    if (acceptButton) {
      await acceptButton.click();
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  } catch (_) { }

  // Digitar busca e pressionar Enter
  await page.waitForSelector('#searchboxinput', { timeout: 60000 });
  await page.type('#searchboxinput', 'escritórios de advocacia em Francisco Beltrão');
  await page.keyboard.press('Enter');
  await new Promise(resolve => setTimeout(resolve, 7000));

  // Scroll para carregar todos resultados na lista lateral
  const scrollableDivSelector = 'div[role="feed"]';
  await page.waitForSelector(scrollableDivSelector);

  const scrollableDiv = await page.$(scrollableDivSelector);

  let previousHeight = 0;
  let sameHeightCount = 0;  // Para contar vezes que a altura não mudou (evitar loop infinito)
  const maxSameHeightCount = 5; // Para parar após 5 tentativas sem mudança

  while (sameHeightCount < maxSameHeightCount) {
    const currentHeight = await page.evaluate(el => el.scrollHeight, scrollableDiv);

    if (currentHeight === previousHeight) {
      sameHeightCount++;
    } else {
      sameHeightCount = 0;
      previousHeight = currentHeight;
    }

    // Scrolla 500px para baixo no feed
    await page.evaluate(el => el.scrollBy(0, 500), scrollableDiv);

    // Espera um pouco para carregar mais resultados
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Pega todos links da lista
  const links = await page.$$eval('a.hfpxzc', els => els.map(el => el.href));
  console.log(`Links encontrados: ${links.length}`);

  const results = [];

  // Para cada link, extrai nome, endereço e telefone
  for (const link of links.slice(0, 100)) {
    await page.goto(link, { waitUntil: 'domcontentloaded' });
    await new Promise(resolve => setTimeout(resolve, 7000));

    const name = await page.$eval('h1.DUwDvf', el => el.innerText).catch(() => '');

    const infos = await page.$$eval('div.Io6YTe.fontBodyMedium.kR99db.fdkmkc', nodes =>
      nodes.map(n => n.innerText)
    ).catch(() => []);

    let address = '';
    let phone = '';

    for (const info of infos) {
      if (/\(\d{2}\)\s?\d/.test(info)) phone = info;
      else if (/\d{5}-\d{3}/.test(info)) address = info;
    }

    results.push({ name, address, phone });
  }

  // Gera CSV
  const csv = results
    .map(r => `"${r.name.replace(/"/g, '""')}","${r.address.replace(/"/g, '""')}","${r.phone.replace(/"/g, '""')}"`)
    .join('\n');

  fs.writeFileSync(path.join(__dirname, 'escritorios.csv'), csv);

  console.log(`✅ ${results.length} resultados salvos em escritorios.csv`);
  await browser.close();
})();
