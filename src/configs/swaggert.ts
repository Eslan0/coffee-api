import swaggerJSDoc from "swagger-jsdoc";
import { OpenAPIV3 } from "openapi-types";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

// map jsdoc comments to routes
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
        url: "http://localhost:5000/v2.0.4",
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
  apis: ["./src/routes/*.ts", "./documents/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options) as OpenAPIV3.Document;

// load external yaml files into documents/
const docsDir = path.resolve(__dirname, "../documents");
if (fs.existsSync(docsDir)) {
  const files = fs.readdirSync(docsDir);

  files.forEach((file) => {
    const ext = path.extname(file);
    const fullPath = path.join(docsDir, file);
    if (ext === ".yaml" || ext === ".yml") {
      const doc = yaml.load(fs.readFileSync(fullPath, "utf8")) as OpenAPIV3.Document;
      if (doc.paths) {
        swaggerSpec.paths = {
          ...swaggerSpec.paths,
          ...doc.paths,
        };
      }
    }
  });
}

export { swaggerSpec };
