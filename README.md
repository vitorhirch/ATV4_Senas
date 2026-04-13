## Gerador de Jogos da Sena
## Ojetivo
<p justify text> Aplicação web simples para criação, validação e exibição de jogos da Mega-Sena,</p>

## Sobre o projeto
<p justify text> Este projeto teve como objetivo a pratica de conceitos fundamentais de desenvolvimento web, incluindo: </p>
- Manipulação de DOM com Javascript
- Validação de dados de entrada
- Estruturação de lógica de negócio
-Renderização dinâmica de elementos na tela

A aplicação permite que o usuário insira combinações de números e visualize em formato de jogos da Mega-sena dentro de "bolinhas" semelhante aos resultados oficiais. 

## Funcionalidade
- Inserção de jogos manualmente
- Suporte a diferentes formatos de entrada
- Validação de dados 
- Exibição dos números em formato visual
- Ordenação automática dos números

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript
- Dotenv
- Node.Js
- Express

## Estrutura do projeto
<pre> ```
.
|-- public/ 
|   |-- assets/ 
|   |  |-- css/main.css 
|   |  |-- js/ main.js
|   |-- pages/index.html 
|-- src
   |--database/
   |  |--connection.js
   |  `--senas.js 
   |--routes/
   |  `--sena.routes.js
   `--server.js    
```
</pre>

## Como executar
1. Instale as dependências:
`npm install`

2. Inicie o servidor:
`npm start` 

3. Abra o navegador:
`http://localhost:3001`

Caso queira utilizar outra porta, altere `PORT` no arquivo `.env`.

## Modo desenvolvimento
Caso queira rodar o programa com reinício automático ao salvar os arquivos:
`npm dev`

## Banco de dados
O código espera uma tabela chamada `senas` com pelo menos estas colunas:
 
```text
 CREATE TABLE senas (
   id_sena SERIAL PRIMARY KEY,
   nros VARCHAR(17) NOT NULL
); 
```

Observação: a validação completa das dezenas ainda não acontece no backend. Hoje a API recebe a string enviada pelo frontend e grava o valor no banco.

## Variáveis de ambiente 
Crie um arquivo `.env` na raiz do projeto com:

```PORT=3000
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgres
POSTGRES_PORT=5432
```
