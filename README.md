📍 Gerador de Leads Públicos com Google Maps via Puppeteer
Este projeto automatiza a extração de leads públicos de estabelecimentos comerciais no Google Maps usando Puppeteer.
Você pode buscar qualquer tipo de negócio — como clínicas, salões de beleza, cafeterias, escritórios, lojas, etc. — em qualquer cidade.

🎯 Objetivo
Facilitar a captura de informações públicas no Google Maps para gerar listas de contatos comerciais (leads) que podem ser usadas em:

Prospecção

Estratégias de marketing

Estudos de mercado

Análise de concorrência

✏️ Como personalizar a busca
Edite esta linha no arquivo index.js:

js
Copiar
Editar
await page.type('#searchboxinput', 'escritórios de advocacia em Francisco Beltrão');
Exemplos de personalização:

'salões de beleza em Curitiba'

'clínicas veterinárias em São Paulo'

'cafeterias em Belo Horizonte'

'empresas de TI em Recife'

📦 Dependências
Pacote	Descrição
puppeteer	Automação do navegador Chrome/Chromium
fs	Módulo nativo do Node.js para arquivos
path	Módulo nativo do Node.js para caminhos

Instale com:

bash
Copiar
Editar
npm install
⚙️ Passo a passo para executar
Clone o repositório

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse a pasta do projeto

bash
Copiar
Editar
cd seu-repositorio
Instale as dependências

bash
Copiar
Editar
npm install
Execute o script

bash
Copiar
Editar
node index.js
💡 Durante a execução, o navegador será aberto em modo visível (headless: false) para simular uso humano e evitar bloqueios.

🔄 O que o script faz
Acessa o Google Maps

Aceita os cookies (se aparecerem)

Realiza a busca informada (ex: "salões de beleza em Curitiba")

Rola a lista lateral até carregar o máximo de resultados

Acessa os 100 primeiros locais encontrados

Em cada local, extrai:

✅ Nome

📍 Endereço

☎️ Telefone

Gera e salva um arquivo CSV chamado escritorios.csv

📂 Exemplo de saída (escritorios.csv)
csv
Copiar
Editar
"Nome","Endereço","Telefone"
"Café Exemplo","Rua A, 123 - Centro","(46) 99999-0000"
"Clínica XYZ","Av. Brasil, 456 - Centro","(11) 98888-7777"
...
💡 Dicas
Para coletar mais ou menos que 100 resultados, edite esta linha no script:

js
Copiar
Editar
for (const link of links.slice(0, 100))
O script depende da disponibilidade de informações no perfil público do Google Maps.

Use a automação de forma ética e responsável, respeitando as políticas de uso do Google.

👨‍💻 Autor
Desenvolvido por Patrick, focado em automações que economizam tempo, otimizam tarefas e geram valor real.

Contribuições, ideias e sugestões são muito bem-vindas!
