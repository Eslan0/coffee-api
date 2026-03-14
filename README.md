# Coffee API

Coffee API is a compact RESTful API project for small businesses. Developed with Node.js, Express.js, MongoDB, and TypeScript.

> - C.R.U.D, Filter, Paginate, Sort and Search API

## Table of contents

- [Preview](#preview)
- [Technologies](#technologies)
- [Routes](#routes)
- [Structure](#structure)
- [Use](#use)
- [Features](#features)
- [Variables](#variables)
- [Collaboration](#collaboration)
- [Author](#author)

## Preview

- [LIVE API preview](https://test-api.herokuapp.com)

- [Front-End repository](https://github.com/eslan0/test)

- [LIVE Webside preview](https://test-ecommerce.vercel.app)

## Technologies

- Node.js
- Express
- MongoDB
- JSON Web Token (JWT)
- bcryptjs
- Heroku Hosting

## Routes

| Method | Route/Endpoint | Description | Parameters | Authentication |
| :---: | :---: | :---: | :---: | :---: |
| GET | `/` | Home (inicio). | None | No |
| POST | `/login` | Enviar formulario de login. | User data | No |
| GET | `/users` | Lista todos os usuários. | None | Yes |
| POST | `/users` | Cria um novo usuário. | User data | Yes |
| GET | `/users/{id}` | Retorna um usuário específico. | `id` (in URL) | Yes |
| PUT | `/users/{id}` | Atualiza um usuário existente. | `id` (in URL), User data | Yes |
| GET | `/products` | Retorna a lista de produtos. | `limit`, `offset` | No |
| GET | `/products/{id}` | Retorna um produto específico. | `id` (in URL) | No |
| GET | `/orders` | Rertonar lista de pedidos. | None | Yes |
| GET | `/orders/{id}` | Rertonar um pedido específico. | `id` (in URL) | Yes |
| POST | `/orders/{id}` | Cria um novo pedido. | Order data | Yes |
| PUT | `/orders/{id}` | Atualizar um pedido. | `id` (in URL), Order data | Yes |
| DELETE | `/orders/{id}` | Exclui um pedido. | `id` (in URL) | Yes |

## Structure

``` pipline
coffee-api/
├── src/
│   ├── config/          # Variáveis de ambiente e conexão DB
│   ├── controllers/     # Validação de entrada e resposta (HTTP)
│   ├── middlewares/     # Erros, Auth, Logging
│   ├── models/          # Schemas do Mongoose
│   ├── routes/          # Definição das rotas
│   ├── services/        # Regras de negócio
│   └── server.ts        # Entry point
├── .env                 # Credenciais do Atlas
├── tsconfig.json        # Configuração do TS
└── package.json
```

## Use

1.**Clone the repository:**
[https://github.com/eslan0/coffee-api.git](https://github.com/eslan0/coffee-api.git)

```bash
  git clone https://github.com/eslan0/coffee-api
```

wududdy.

2.**Go to the project directory**

```bash
  cd coffee-api
```

3.**Install dependencies**

```bash
  yarn install
  # or
  npm install
```

4.**Start the server**

```bash
  npm start
  # or
  nodemon server.ts
```

---

### Features

1.**(Users)**

- Complete user authentication
- Users can sign in
- Users can sign out
- Users can verify email
- Users can Change Password
- View all products
- View products detail
- Filter products by category
- Search for products
- Add products to their basket
- Checkout total payment
- Checkout order page
- Products pagination

2.**(Admin)**

- Complete Admin Authorization
- Add products
- Update products
- Delete products
- Limit Products
- Add Users
- Update Users
- Delete Users
- Update User Role

---

### Variables

- To run this project, you will need to add the following environment variables to your .env file (check environment.config.js file for more examples)

- MONGODB_CONNECTION_STRING
- TOKEN_SECRET
- WEBSITE_URL
- API_VERSION ="v2"
- JWT_EXPIRE_TIME
- SEND_GRID_API_KEY
- ADMIN_SEND_GRID_EMAIL
- ADMIN_ROLE
- ADMIN_EMAIL
- NODE_ENV = 'development'
- CLIENT_URL
- ACCESS_TOKEN_SECRET_KEY
- REFRESH_TOKEN_SECRET_KEY
- ACCESS_TOKEN_KEY_EXPIRE_TIME
- REFRESH_TOKEN_KEY_EXPIRE_TIME

---

### Collaboration

[Es](https://github.com/Eslan0)

### Author

[Elias Abreu](https://github.com/eliasabrell)

---
