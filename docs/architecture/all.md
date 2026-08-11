# All

```bash
coffee-api/
│
├── src/
│   │
│   ├── index.ts
│   ├── app.ts
│   │
│   ├── config/
│   │   ├── env.ts
│   │   └── database.ts
│   │
│   ├── infrastructure/
│   │   ├── database/
│   │   │   ├── client.ts
│   │   │   ├── migrations/
│   │   │   └── seed.ts
│   │   │
│   │   ├── logger/
│   │   │   └── logger.ts
│   │   │
│   │   └── observability/
│   │       ├── metrics.ts
│   │       └── tracing.ts
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── logging.middleware.ts
│   │   ├── request-id.middleware.ts
│   │   └── security.middleware.ts
│   │
│   ├── shared/
│   │   ├── errors/
│   │   │   ├── app-error.ts
│   │   │   ├── not-found-error.ts
│   │   │   └── validation-error.ts
│   │   │
│   │   ├── http/
│   │   │   ├── response.ts
│   │   │   └── status-codes.ts
│   │   │
│   │   ├── types/
│   │   │   └── common.ts
│   │   │
│   │   └── utils/
│   │       └── ...
│   │
│   └── modules/
│       │
│       ├── coffees/
│       │   ├── coffee.routes.ts
│       │   ├── coffee.controller.ts
│       │   ├── coffee.service.ts
│       │   ├── coffee.repository.ts
│       │   ├── coffee.schema.ts
│       │   ├── coffee.types.ts
│       │   └── index.ts
│       │
│       ├── users/
│       │   ├── user.routes.ts
│       │   ├── user.controller.ts
│       │   ├── user.service.ts
│       │   ├── user.repository.ts
│       │   ├── user.schema.ts
│       │   ├── user.types.ts
│       │   └── index.ts
│       │
│       └── auth/
│           ├── auth.routes.ts
│           ├── auth.controller.ts
│           ├── auth.service.ts
│           ├── auth.schema.ts
│           ├── auth.types.ts
│           └── index.ts
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── docs/
│   ├── architecture/
│   │   ├── overview.md
│   │   ├── architecture.md
│   │   ├── database.md
│   │   └── serverless.md
│   │
│   └── openapi/
│       ├── openapi.yaml
│       ├── paths/
│       ├── schemas/
│       └── components/
│
├── scripts/
│   ├── seed.ts
│   └── ...
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── eslint.config.js
├── prettier.config.js
├── vitest.config.ts
└── serverless configuration
```
