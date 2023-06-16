
# Documentação da API

## Tabela de Conteúdos


- [Documentação da API](#documentação-da-api)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [1. Visão Geral](#1-visão-geral)
  - [2. Início Rápido](#2-início-rápido)
    - [2.1. Instalando Dependências](#21-instalando-dependências)
    - [2.2 Variáveis de Ambiente](#22-variáveis-de-ambiente)
    - [2.3. Migrations](#23-migrations)
  - [1. \**Companys*](#1-companys)
    - [Endpoints](#endpoints)
    - [1.1. **Criação de empresa**](#11-criação-de-empresa)
    - [`/companys`](#companys)
    - [Exemplo de Request:](#exemplo-de-request)
    - [Corpo da Requisição:](#corpo-da-requisição)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)

A URL base da aplicação:

https://dubairrobackend.onrender.com/

---

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```


### 2.2 Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/database/data-source.ts
```

---
## 1. **Companys*

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo      | Tipo    | Descrição                                  |
| ---------- | ------- | ------------------------------------------ |
| id         | string  | Identificador único da empresa             |
| user_name  | string  | O nome da empresa.                         |
|logo_company| string  | Url da logo da empresa                     |  
| email      | string  | O e-mail do usuário.                       |
| password   | string  | A senha de acesso do usuário               |
| created_at | date    | Data de cadastro da empresa                |
| updated_at | date    | Data de atualização do perfil da empresa   |
| city       | string  | Objeto Address, define endereço do usuário |
| contact    | string  | Objeto Contact, define contatos do usuário |
| bairro     | string  | Objeto Contact, define contatos do usuário |

### Endpoints

| Método | Rota          | Descrição                 |
| ------ | ----------    | ------------------------- |
| POST   | /company      | Criação de um usuário.    |
| POST   | /login        | Login do usuário.         |
| GET    | /company      | Lista todos os usuários   |
| GET    | /company/:id  | Lista um usuário          |
| PATCH  | /company/:id  | Atualiza dados do usuário |
| DELETE | /company/:id  | SoftDelete do usuário     |

---

### 1.1. **Criação de empresa**

[ Voltar para os Endpoints ](#5-endpoints)

### `/companys`

### Exemplo de Request:

```
POST /companys
Host: https://dubairrobackend.onrender.com/
Authorization: None
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "companyName": "adm",
  "logoCompany": "url_image",
  "email": "adm@mail.com",
  "password": "1234",
  "companyDescripition": "very good my company",
  "cep": "12345678",
  "city": "Recife",
  "bairro": "Nova Decoberta",
  "number": "10",
  "phone": "81991919191",
  }


```