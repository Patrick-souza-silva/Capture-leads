# 📍 Gerador de Leads Públicos — Google Maps + Puppeteer

Bem-vindo ao repositório do meu Gerador de Leads Públicos!
Este projeto automatiza a extração de informações públicas de estabelecimentos comerciais no Google Maps usando Puppeteer.

Você pode buscar qualquer tipo de negócio — como clínicas, salões de beleza, cafeterias, escritórios, lojas, etc. — em qualquer cidade.

---

## 🎯 Objetivo

Facilitar a captura de informações públicas do Google Maps para gerar listas de contatos comerciais (leads) que podem ser usadas em:

* 📞 Prospecção

* 📊 Estratégias de marketing

* 🏪 Estudos de mercado

* ⚔️ Análise de concorrência

* 🚀 Funcionalidades

* 🔍 Busca automatizada de negócios no Google Maps.

* 🖱️ Rolagem automática para carregar mais resultados.

* 📂 Extração dos 100 primeiros locais encontrados.

* ✅ Coleta das informações

---
  

## 🛠️ Tecnologias Utilizadas

Node.js

Puppeteer — automação do navegador Chrome/Chromium

fs (nativo do Node.js) — manipulação de arquivos

path (nativo do Node.js) — manipulação de caminhos

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── index.js       # Script principal (busca e coleta)
├── leads.csv      # Arquivo gerado com os leads (exemplo de saída)
└── package.json   # Configuração do projeto
```

---

## ✏️ Como Personalizar a Busca

No arquivo index.js, edite esta linha:

```bash
await page.type('#searchboxinput', 'escritórios de advocacia em Francisco Beltrão');
```

---

## 📌 Exemplos de personalização:

'salões de beleza em Curitiba'

'clínicas veterinárias em São Paulo'

'cafeterias em Belo Horizonte'

'empresas de TI em Recife'

Se quiser mais ou menos que 100 resultados, altere esta linha:

for (const link of links.slice(0, 100))

---

## ⚙️ Como Rodar o Projeto

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Instale as dependências:

```bash
npm install
```

Execute o script:

```bash
node index.js
```

---

## 💡 Observações Importantes

O script depende da disponibilidade de informações no perfil público do Google Maps.

Use a automação de forma ética e responsável, respeitando as políticas de uso do Google.
💾 Geração de um arquivo CSV com os dados coletados.

👁️ Execução em modo visível (headless: false) para simular uso humano e evitar bloqueios.

---

## 📬 Contato

- [📸 Instagram](https://www.instagram.com/_patrick.edueu_)
- [💼 LinkedIn](https://www.linkedin.com/in/patrick-souza-b20b50248/)

  ---
