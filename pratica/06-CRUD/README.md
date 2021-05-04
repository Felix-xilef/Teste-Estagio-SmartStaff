# Desafio

Faça um script/sistema, em qualquer linguagem de programação, que ofereça funções CRUD (**C**reate, **R**ead, **U**pdate e **D**elete).

# Contexto

Com o crescimento do mercado imobiliário nos últimos 10 anos, diversos sistemas para incorporadoras/construtoras foram criados ao longo do tempo, cada um com um propósito específico.

Com isso surgiu a necessidade de criar um novo software, unindo as funcionalidades de todos os anteriores, para uma utilização mais simples e rápida.

# Desafio

É aí que você entra!

Sua missão é criar uma parte deste novo sistema.

## Frontend

Deve ser criado o frontend para consumir o backend/API, contendo:

 - Tela inicial, com a listagem dos registros (colunas de exibição ao seu critério)
   - Filtros de busca por `data de início`e `data de término`
   - Ordenação por `menor budget`, `maior budget`, `A-Z` e `Z-A`
   - Paginação
 - Tela para cadastro e edição
 - Exclusão
 - O visual/interface é ao seu critério

## Backend/API

Deve ser criado o backend/API, para fazer o processamento dos dados e regra de negócio.

A paginação, ordenação e filtragem deves ser feitos preferencialmente na API.

## Banco de dados

Os dados devem ser armazenados em algum local.

Como exemplo de estrutura e massa de dados, o JSON de nome `exemplo.json`, nesta mesma pasta, deve ser utilizado. Converta-o para o banco de dados utilizado.

Possuímos preferência por banco de dados MySQL (caso seja utilizado, informar na documentação como importar o banco de dados, como configuração a conexão e fornecer também o arquivo SQL com a estrutura/dados utilizados).

Porém, caso não possua familiaridade com MySQL, é possível utilizar quaisquer outras tecnologias, até mesmo o próprio JSON.

# Observações

Neste desafios existem vários conceitos/funcionalidades/detalhes de diferentes níveis, acreditamos que o entendimento do conceito geral é o mais importante, portanto não tem problema entregar este teste sem alguns conceitos, funcionalidades e/ou alguns detalhes.

# Documentação

## Feito com

<a href="https://nodejs.org/">
	<img src="https://nodejs.org//static/images/logo.svg" height=48></img>
</a>
e
<a href="https://www.typescriptlang.org/">
	<img src="https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae" height=32></img>
</a>

## Requisitos

Para executar o programa, o NodeJs deve estar instalado na sua máquina.

- Para verificar se o NodeJs está instalado execute o comando `node --version`. Caso a versão do NodeJs seja impressa na tela, como no exemplo abaixo, ele está instalado.
    ```
    > node --version
    v14.15.4
    ```

- Caso ele não esteja instalado acesse o link adquirir a seguir para sua versão mais recente:
[NodeJs.org](https://nodejs.org/en/)

## Como rodar

Abra o terminal na pasta backend (`'/pratica/06-CRUD/backend'` a partir da pasta inicial deste repositório) e execute o comando `npm run dev` :

### Terminal
```
> cd /pratica/06-CRUD/backend
/pratica/06-CRUD/backend> npm run dev
```

A API escutará pela porta `3333` do `localhost`.

## Instruções

### Inserções, Atualizações e Remoções

Utilize a rota `/registry` (`http://localhost:3333/registry`). O parâmetro recebido é um JSON no seguinte modelo:

```JSON
{
	"_id": "5e74f6d7ca97659df8d8b301",
	"budget": "$353,428.45",
	"pictures": [
		{
		"url": "https://picsum.photos/200/300"
		},
		{
		"url": "https://picsum.photos/200/300"
		},
		{
		"url": "https://picsum.photos/200/300"
		},
		{
		"url": "https://picsum.photos/200/300"
		}
	],
	"age": 69,
	"name": {
		"first": "Reyna",
		"last": "Stone"
	},
	"company": "QUINEX",
	"email": "reyna.stone@quinex.info",
	"phone": "+1 (859) 560-2768",
	"address": "280 Williams Place, Barclay, Vermont, 9702",
	"about": "Aliquip laborum elit nulla non. Fugiat irure dolore et ex sit veniam velit minim aliquip ex nostrud nisi irure. Dolore incididunt qui duis aliquip.",
	"registered": "Fri Jan 10 2014 10:21:49 GMT+0000",
	"latitude": "36.118223",
	"longitude": "95.440079",
	"contactTimeline": [
		{
		"id": 0,
		"broker": "Franks Allison",
		"date": "Thu Jul 12 2018 16:57:26 GMT+0000"
		},
		{
		"id": 1,
		"broker": "Sophia Henson",
		"date": "Fri Feb 17 2017 19:45:13 GMT+0000"
		},
		{
		"id": 2,
		"broker": "Aisha Parks",
		"date": "Wed Sep 13 2017 14:45:52 GMT+0000"
		}
	],
	"channel": "Google"
}
```

### Seleção Única

Utilize a rota `/registry` (`http://localhost:3333/registry`). O parâmetro recebido é um JSON com o id do elemento a ser selecionado, como no seguinte modelo:

```JSON
{
	"id": "5e74f6d7ca97659df8d8b301"
}
```

### Seleção Multipla

Utilize a rota `/registries` (`http://localhost:3333/registries`). O parâmetro recebido é um JSON opcional com os campos para a ordenação ('name' ou 'budget') e o sentido ('ASC' ou 'DESC') dos elementos a serem selecionados, como no seguinte modelo: 

*(Caso nenhum parâmetro for enviado a ordenação será feita, por padrão, a partir do campo 'name' com sentido 'ASC')

```JSON
{
	"orderBy": "name",
	"direction": "ASC"
}
```

