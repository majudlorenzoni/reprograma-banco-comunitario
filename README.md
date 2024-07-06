# Reprograma Bank

# Para compilar
Instale as dependências necessárias

`npm init -y`

`npm install express typescript ts-node @types/node @types/express`

## Estrutura de Pastas

│node_modules/

├── src/

│   ├── controllers/

│   │   └── xxxController.ts

│   ├── models/

│   │   └── clienteModel.ts

│   │   └── contaCorrenteModel.ts

│   │   └── contaPoupancaModel.ts

│   │   └── contaModel.ts

│   │   └── gerenteModel.ts

│   ├── routes/

│   │   └── clienteRoutes.ts

│   │   └── contaRoutes.ts

│   │   └── gerenteRoutes.ts

│   │   └── transacoesRoutes.ts

│   ├── services/

│   │   └── clienteService.ts

│   │   └── contaService.ts

│   │   └── gerenteService.ts

│   └── index.ts

├── package.json

├── tsconfig.json

└── README.md

# Instruções para compilar o projeto
## Para executar
`npm start`

## Para instalar o express
`npm install express`

## Para instalar o typescript
`npm install typescript`

## Para instalar o ts-node
`npm install ts-node`

## Para instalar o @types/node
`npm install @types/node`

## Para instalar o @types/express
`npm install @types/express`

## Para instalar o nodemon
`npm install nodemon`

## Para executar o nodemon
`npx nodemon src/index.ts`
