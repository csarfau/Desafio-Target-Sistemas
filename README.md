# Passo a Passo para Execução do Projeto

Este documento contém as instruções para compilar e executar um projeto TypeScript. O projeto contém um diretório `src` com várias funções e o arquivo principal `index.ts`. O arquivo de configuração `tsconfig.json` está na raiz do projeto.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na sua máquina.
- [TypeScript](https://www.typescriptlang.org/) instalado globalmente ou no seu projeto.
  
## Passo 1: Compilar os arquivos

Para compilar o código: 

```bash
npx tsc
```

Caso possua o Typescript instalado:

```bash
tsc
```

## Passo 2: Execução

Será criado o diretório ./dist na raiz do projeto, agora é só executar o index.js deste diretório.

```bash
node .\dist\index.js
```
