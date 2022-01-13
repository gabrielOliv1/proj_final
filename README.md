# Twitter Clone

> Este é o 2° projeto entregável do 4° módulo de Backend da BlueEdtech. O projeto consiste na construção de uma API para o controle de uma rede social, e a homenageada escolhida foi o Twitter. 


![twitter-message-chat-inbox-png-logo-26](https://user-images.githubusercontent.com/89107513/149239710-aa98d35d-faee-4b63-b19a-0bde07b6a774.png)



**Conteúdos**

###
* [Tecnologias usadas](#tecnologias-usadas);
* [Instalações e configurações](#instalação);
    * [NestJS](#nestjs);
    * [Prisma](#prisma);
* [Rotas](#rotas);


### Tecnologias usadas: 
- [NestJS](https://docs.nestjs.com/);
- [Typescript](https://www.typescriptlang.org/docs/);
- [PostgreSQL](https://www.postgresql.org/docs/);
- [Prisma](https://docs.nestjs.com/recipes/prisma);

### Instalação

### NestJS

Primeiramente, vamos rodar alguns comandos para iniciar nosso projeto

``` bash
npm i -g @nestjs/cli
```

``` bash
nest new nome-do-projeto
```

### Prisma

``` bash
npm i prisma --save dev
```

``` bash
npx prisma init
```

Com estes comandos, será criado um novo diretório chamado prisma e os seguintes arquivos:

- Schema.prisma;
- .env

O _Schema.prisma_ nos possibilitará criar e modificar os modelos em nosso banco de dados. Já o arquivo dotenv, definirá a conexão com o PostgreSQL e também carregará informações confidenciais.

A URL de conexão deve seguir este padrão: _"postgresql://postgres:password@localhost:5432/nome-bd"_

Estabelecida a conexão, construa os modelos e poderá criá-los no banco de dados através deste comando:

``` bash
npm prisma db push
```

Em seguida, instale o Prisma Client:
``` bash
npm i @prisma/client
```

Sempre que houver uma alteração no Schema, rode o comando abaixo para sincronizar as mudanças com o aplicativo.
``` bash
npx prisma generate
```
Em seguida, um novo push.

Para utilizar o Prisma Client, crie um diretório "lib" e um arquivo "prisma.ts" e insira o código para habilitar o Client em uma variável:

![code](https://user-images.githubusercontent.com/89107513/149239672-531312d4-3b55-4d55-b1e0-b2b13a3a96f6.png)

### Rotas

Para acessar as rotas pelo Swagger, execute:
>npm run start:dev
e depois, abra a guia:
>http:localhost:3000/api

![2022-01-12 (3)](https://user-images.githubusercontent.com/89107513/149243561-45dbb500-865b-4c52-b81d-1813d4c2b64f.png)

Exemplo, inserindo um novo User.

![2022-01-12](https://user-images.githubusercontent.com/89107513/149240358-979f8b78-050c-4ac8-8c70-49d406c9bd60.png)



