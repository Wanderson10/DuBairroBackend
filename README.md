
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
    - [Exemplo de Response:](#exemplo-de-response)
    - [Possíveis Erros:](#possíveis-erros)
    - [1.2. **Login do usuário**](#12-login-do-usuário)
    - [Exemplo de Request:](#exemplo-de-request-1)
    - [Corpo da Requisição:](#corpo-da-requisição-1)
    - [Exemplo de Response:](#exemplo-de-response-1)
    - [Possíveis Erros:](#possíveis-erros-1)
    - [1.3. **Listando Usuários**](#13-listando-usuários)
    - [`/company`](#company)
    - [Exemplo de Request:](#exemplo-de-request-2)
    - [Corpo da Requisição:](#corpo-da-requisição-2)
    - [Exemplo de Response:](#exemplo-de-response-2)
    - [Possíveis Erros:](#possíveis-erros-2)
    - [1.4. **Listando Usuário**](#14-listando-usuário)
    - [`/user/:id`](#userid)
    - [Exemplo de Request:](#exemplo-de-request-3)
    - [Corpo da Requisição:](#corpo-da-requisição-3)
    - [Exemplo de Response:](#exemplo-de-response-3)
    - [Possíveis Erros:](#possíveis-erros-3)
    - [1.5. **Atualização do usuário**](#15-atualização-do-usuário)
    - [`/company/:id`](#companyid)
    - [Exemplo de Request:](#exemplo-de-request-4)
    - [Corpo da Requisição:](#corpo-da-requisição-4)
    - [Exemplo de Response:](#exemplo-de-response-4)
    - [Possíveis Erros:](#possíveis-erros-4)
    - [1.6. **SoftDelete do usuário**](#16-softdelete-do-usuário)
    - [`/company/:id`](#companyid-1)
    - [Exemplo de Request:](#exemplo-de-request-5)
    - [Corpo da Requisição:](#corpo-da-requisição-5)
    - [Exemplo de Response:](#exemplo-de-response-5)
    - [Possíveis Erros:](#possíveis-erros-5)

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

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created

```

```json
{
	"companyName": "ARASAKA CORPORATION",
	"email": "arasaka",
	"telefone": "51997866074",
	"logoCompany": "https://i.pinimg.com/originals/48/57/58/48575898784b74834f564cb1c163dc93.jpg",
	"companyDescripition": "A Arasaka Corporation (japonês: アラサカ社 ou 荒坂社), é uma megacorporação mundial que lida com segurança corporativa, bancos e manufatura.[1] É uma das megacorporações mais influentes do mundo.[4] A empresa também é a maior distribuidora de mercadorias japonesas nos mercados americano, europeu e asiático. Armas e veículos militares da marca Arasaka estão entre os mais procurados pela polícia e empresas de segurança.[5] Ao longo dos anos, desenvolveu uma reputação sombria como uma corporação que deve ser temida e que cobre seus rastros usando assassinos, um exército de advogados, bem como uma suposta conexão com a Yakuza.",
	"city": "NigthCity",
	"bairro": "Rua dig dig",
	"tipe": "Tecnologia",
	"id": "0b0eef29-347f-4d32-928a-542ccceecfd6",
	"createdAt": "2023-06-12T18:27:48.726Z",
	"updatedAt": "2023-06-12T18:27:48.726Z"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição             |
| --------------- | --------------------- |
| 400 Bad request | Email already exists. |

--- 

### 1.2. **Login do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### Exemplo de Request:

```
POST /login
Host: https://mais-que-um-pet.herokuapp.com
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "adm@mail.com",
  "password": "1234"
}
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyYXNha2FAZW1haWwuY29tIiwiaWQiOiJmOTNjNmQzYi1jZDE2LTQ2MmEtYWZmMS0wNjkzMmY3MTk0MTUiLCJpYXQiOjE2ODcyNzgzNTMsImV4cCI6MTY4NzM2NDc1M30.IRT537YR58G_gV1nvDDorcMBEvYpHT4z8uWwCjmhLOE",
	"acount": {
		"id": "f93c6d3b-cd16-462a-aff1-06932f719415",
		"companyName": "ARASAKA CORPORATION",
		"email": "arasaka@email.com",
		"phone": "51997866074",
		"logoCompany": "https://i.pinimg.com/originals/48/57/58/48575898784b74834f564cb1c163dc93.jpg",
		"companyDescripition": "A Arasaka Corporation (japonês: アラサカ社 ou 荒坂社), é uma megacorporação mundial que lida com segurança corporativa, bancos e manufatura.[1] É uma das megacorporações mais influentes do mundo.[4] A empresa também é a maior distribuidora de mercadorias japonesas nos mercados americano, europeu e asiático. Armas e veículos militares da marca Arasaka estão entre os mais procurados pela polícia e empresas de segurança.[5] Ao longo dos anos, desenvolveu uma reputação sombria como uma corporação que deve ser temida e que cobre seus rastros usando assassinos, um exército de advogados, bem como uma suposta conexão com a Yakuza.[6][7]",
		"city": "nigth city",
		"district": "Rua dig dig",
		"tipe": "Tecnologia",
		"createdAt": "2023-06-16T17:34:38.640Z",
		"updatedAt": "2023-06-20T16:18:05.525Z"
	}
}
]
```

### Possíveis Erros:

| Código do Erro  | Descrição                   |
| --------------- | --------------------------- |
| 400 Bad request | email/password is required. |
| 403 forbidden   | Wrong email/password.       |

---

### 1.3. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/company`

### Exemplo de Request:

```

GET /users
Host: https://mais-que-um-pet.herokuapp.com
Authorization: None
Content-type: application/json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  	{
		"id": "f93c6d3b-cd16-462a-aff1-06932f719415",
		"companyName": "ARASAKA CORPORATION",
		"email": "arasaka@email.com",
		"phone": "51997866074",
		"logoCompany": "https://i.pinimg.com/originals/48/57/58/48575898784b74834f564cb1c163dc93.jpg",
		"companyDescripition": "A Militech International Armaments é uma megacorporação especializada na fabricação de armas e contratação militar privada. A Militech é uma das maiores fabricantes mundiais de armas e veículos militares, com instalações em todos os continentes. A Militech fornece equipamentos para centenas de nações, bem como organizações privadas e governamentais, especialmente as forças militares e policiais da NUSA. Este equipamento inclui, entre outros, armas de fogo pessoais, drones, tanques, aeronaves, navios e armaduras pessoais de combate assistido.",
		"city": "nigth city",
		"district": "Rua dig dig",
		"tipe": "Tecnologia",
		"createdAt": "2023-06-16T17:34:38.640Z",
		"updatedAt": "2023-06-20T16:36:35.786Z"
	},
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---
### 1.4. **Listando Usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/:id`

### Exemplo de Request:

```

GET /user
Host: https://mais-que-um-pet.herokuapp.com
Authorization: Bearer token
Content-type: application/json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
	{
		"id": "f93c6d3b-cd16-462a-aff1-06932f719415",
		"companyName": "ARASAKA CORPORATION",
		"email": "arasaka@email.com",
		"phone": "51997866074",
		"logoCompany": "https://i.pinimg.com/originals/48/57/58/48575898784b74834f564cb1c163dc93.jpg",
		"companyDescripition": "A Militech International Armaments é uma megacorporação especializada na fabricação de armas e contratação militar privada. A Militech é uma das maiores fabricantes mundiais de armas e veículos militares, com instalações em todos os continentes. A Militech fornece equipamentos para centenas de nações, bem como organizações privadas e governamentais, especialmente as forças militares e policiais da NUSA. Este equipamento inclui, entre outros, armas de fogo pessoais, drones, tanques, aeronaves, navios e armaduras pessoais de combate assistido.",
		"city": "nigth city",
		"district": "Rua dig dig",
		"tipe": "Tecnologia",
		"createdAt": "2023-06-16T17:34:38.640Z",
		"updatedAt": "2023-06-20T16:36:35.786Z"
	},

```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not Found  | User not found. |

---

### 1.5. **Atualização do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/company/:id`

```
Pode ser atualizado o user_name, user_image, email e password.
```

### Exemplo de Request:

```

PATCH /users/:id
Host: https://mais-que-um-pet.herokuapp.com
Authorization: Bearer token
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "user_name": "adm",
  "user_image": "url_da_imagem",
  "email": "adm@mail.com",
  "password": "12345"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"companyName": "ARASAKA CORPORATION",
	"email": "arasaka",
	"phone": "51997866074",
	"logoCompany": "https://i.pinimg.com/originals/48/57/58/48575898784b74834f564cb1c163dc93.jpg",
	"companyDescripition": "A Arasaka Corporation (japonês: アラサカ社 ou 荒坂社), é uma megacorporação mundial que lida com segurança corporativa, bancos e manufatura.[1] É uma das megacorporações mais influentes do mundo.[4] A empresa também é a maior distribuidora de mercadorias japonesas nos mercados americano, europeu e asiático. Armas e veículos militares da marca Arasaka estão entre os mais procurados pela polícia e empresas de segurança.[5] Ao longo dos anos, desenvolveu uma reputação sombria como uma corporação que deve ser temida e que cobre seus rastros usando assassinos, um exército de advogados, bem como uma suposta conexão com a Yakuza.",
	"city": "NigthCity",
	"district": "Rua dig dig",
	"tipe": "Tecnologia",
	"id": "ce632882-503d-43b5-a700-aee7d6213969",
	"createdAt": "2023-06-17T18:43:57.932Z",
	"updatedAt": "2023-06-17T18:43:57.932Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                             |
| ---------------- | ------------------------------------- |
| 400 Bad request  | missing authorization token..         |
| 403 forbidden    | Invalid token.                        |
| 401 unauthorized | Is not able to update isActive value. |
| 401 unauthorized | Is not able to update id.             |
| 404 not found    | User not found.                       |

---

### 1.6. **SoftDelete do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/company/:id`

### Exemplo de Request:

```

DELETE /users/:id
Host: https://mais-que-um-pet.herokuapp.com
Authorization: Bearer token
Content-type: application/json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição                     |
| ---------------- | ----------------------------- |
| 400 Bad request  | missing authorization token.. |
| 403 forbidden    | Invalid token.                |
| 404 not found    | User not found.               |
| 401 unauthorized | User is not active.           |

---