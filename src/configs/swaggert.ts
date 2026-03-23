import swaggerJSDoc from "swagger-jsdoc";
import { OpenAPIV3 } from "openapi-types";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Coffee API",
      version: "2.0.4",
      description: "API documentation for Coffee API",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v2.0.4",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options) as OpenAPIV3.Document;
