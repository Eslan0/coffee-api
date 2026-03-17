# Coffee API

Coffee API is a compact RESTful API project for small businesses. Developed with Node.js, Koa.js, MongoDB, and TypeScript.

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

```plaintext
coffee-api/
├── src/                  # Código-fonte principal da aplicação
│   ├── config/           # Arquivos de configuração, como variáveis de ambiente e conexão com o banco de dados
│   ├── controllers/      # Controladores responsáveis pela validação de entrada e resposta (HTTP)
│   ├── middlewares/      # Middlewares para tratamento de erros, autenticação e logs
│   ├── models/           # Modelos de dados (schemas) definidos com Mongoose
│   ├── routes/           # Definição das rotas da API
│   ├── services/         # Lógica de negócio da aplicação
│   └── server.ts         # Arquivo principal que inicializa o servidor
├── .env                  # Contém as credenciais e variáveis de ambiente (ex: Atlas DB)
├── .env.example          # Exemplo de arquivo .env com as variáveis de ambiente necessárias
├── .eslintignore         # Arquivo que define quais arquivos ou diretórios o ESLint deve ignorar
├── .gitignore            # Arquivo que define quais arquivos ou diretórios o Git deve ignorar
├── .nvmrc                # Define a versão do Node.js a ser utilizada no projeto
├── .prettierignore       # Arquivo que define quais arquivos ou diretórios o Prettier deve ignorar
├── .prettierrc           # Arquivo de configuração do Prettier
├── eslint.config.mjs     # Configuração do ESLint para o projeto
├── jest.config.js        # Configuração do Jest para testes unitários
├── package-lock.json     # Arquivo gerado automaticamente para garantir a consistência das dependências
├── package.json          # Gerenciador de dependências e scripts do projeto
├── README.md             # Este arquivo de documentação do projeto
├── tsconfig.json         # Arquivo de configuração do TypeScript
└── tsconfig.prod.json    # Arquivo de configuração do TypeScript para ambiente de produção
```

## Use

1.**Clone the repository:**
[https://github.com/eslan0/coffee-api.git](https://github.com/eslan0/coffee-api.git)

```bash
  git clone https://github.com/eslan0/coffee-api
```

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

- MONGODB_URI
- TEST_ENV_MONGODB_CONNECTION_STRING
- USE_MEMORY_DB
- TOKEN_SECRET
- WEBSITE_URL
- API_VERSION
- JWT_EXPIRE_TIME
- SEND_GRID_API_KEY
- ADMIN_SEND_GRID_EMAIL
- ADMIN_EMAILS
- MANGER_EMAILS
- MODERATOR_EMAILS
- SUPERVISOR_EMAILS
- GUIDE_EMAILS
- NODE_ENV
- CLIENT_URL
- ACCESS_TOKEN_SECRET_KEY
- REFRESH_TOKEN_SECRET_KEY
- ACCESS_TOKEN_KEY_EXPIRE_TIME
- REFRESH_TOKEN_KEY_EXPIRE_TIME
- STRIPE_SECRET_KEY
- STRIPE_PUBLIC_KEY
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_CALLBACK_URL
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET

---

### Collaboration

[Es](https://github.com/Eslan0)

### Author

[Elias Abreu](https://github.com/eliasabrell)

---
