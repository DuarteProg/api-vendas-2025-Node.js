## API de Vendas:

Você precisará do Docker instalado em seu ambiente de desenvolvimento para rodar Postgres e Redis.

Este repositório contém o código da API que foi desenvolvida.

### Instalando o projeto no seu PC

Instale o projeto em seu ambiente de desenvolvimento seguindo as etapas a seguir.

> NOTA: caso o seu PC esteja com Windows, recomendo trabalhar com um WSL Ubuntu.

1. No Shell, clonar o repositório do projeto em seu PC.

```shell
git clone git@github.com:DuarteProg/api-vendas-2025-Node.js.git
```

2. No Shell, acessar a pasta do projeto e instalar as dependências com o `Npm`.

```shell
cd api-vendas-2025

npm ci
```

3. No Shell, executar o comando `code .` para abrir o Visual Studio Code com o projeto carregado.

4. Criar o arquivo de variaveis de ambiente `.env` na pasta raiz do projeto, incluindo o conteúdo a seguir:

```shell
# Application
PORT=3333
API_URL=http://localhost:3333
```

### Executando o projeto em seu PC

O projeto inicial contém apenas o arquivo `server.ts` com o um `console.log`. Executar o servidor e observar a mensagem `Olá Dev!` na console do shell:

```shell
npm run dev
```

## Redes Sociais

[Instagram]()

[LinkedIn](https://www.linkedin.com/in/duarteprog/)
