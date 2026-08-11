# Structure

## Documents

```plaintext
coffee-api/
├── docs/
│   ├── architecture/
│   │   ├── overview.md
│   │   ├── vertical-slice.md
│   │   ├── folder-structure.md
│   │   ├── request-flow.md
│   │   └── decisions/
│   │       ├── ADR-001-project-structure.md
│   │       ├── ADR-002-authentication.md
│   │       └── ADR-003-error-handling.md
│   ├── api/
│   │   ├── openapi.yaml
│   │   ├── paths/
│   │   ├── components/
│   │   └── examples/
│   ├── database/
│   │   ├── schema.md
│   │   ├── migrations.md
│   │   └── indexes.md
│   ├── deployment/
│   │   ├── docker.md
│   │   ├── environment.md
│   │   └── ci-cd.md
│   └── development/
│       ├── setup.md
│       ├── testing.md
│       ├── conventions.md
│       └── code-style.md
└── README.md
```

## Config

```plaintext
coffee-api/
├── src/
│   ├── config/          # Environment & database configurations
```

## Database

```plaintext
coffee-api/
├── src/
│   ├── database/
│   │   ├── client.ts
│   │   ├── schema/
│   │   └── migrations/
```

## Feature

```plaintext
coffee-api/
├── src/
│   ├── features/
│   │   ├── auth/
│   │   ├── coffee/
│   │   │   ├── create/
│   │   │   │   ├── route.ts
│   │   │   │   ├── handler.ts
│   │   │   │   ├── schema.ts
│   │   │   │   └── dto.ts
│   │   │   ├── list/
│   │   │   │   ├── route.ts
│   │   │   │   ├── handler.ts
│   │   │   │   └── schema.ts
│   │   │   ├── get/
│   │   │   ├── update/
│   │   │   ├── delete/
│   │   │   ├── search/
│   │   │   ├── repository.ts
│   │   │   ├── entity.ts
│   │   │   ├── mapper.ts
│   │   │   └── index.ts
│   │   ├── products/
│   │   ├── users/
│   │   ├── categories/
│   │   └── orders/
```

## Middleware

```plaintext
coffee-api/
├── src/
│   ├── middleware/      # Auth, error, and security handlers
```

## Shared

```plaintext
coffee-api/
├── src/
│   ├── shared/
│   │   ├── errors/
│   │   ├── logger/
│   │   ├── validation/
│   │   ├── constants/
│   │   └── helpers/
```

## Test

```plaintext
coffee-api/
├── src/
│   ├── tests/        # Global and unit tests
```

## Configuration files

```plaintext
coffee-api/
├── .env.example         # Template for environment variables
├── .eslintignore        # ESLint ignore rules
├── .gitignore           # Git ignore rules
├── .nvmrc               # Node.js version management
├── .prettierrc          # Prettier formatting rules
├── eslint.config.mjs    # ESLint configuration
├── jest.config.js       # Jest testing configuration
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── tsconfig.prod.json   # Production TypeScript build settings
```
