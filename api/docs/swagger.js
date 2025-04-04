const swaggerJsdoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    description: "Una red social en NodeJS y  microservicios",
    title: "RedSocialNodeMicroservicios",
    contact: {
      name: "Mateo diaz lopez",
      email: "mateodiaz401@gmail.com",
      url: "https://www.linkedin.com/in/mateo-diaz-lopez/",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
    version: "1.0.0",
  },
  tags: [
    {
      name: "Usuarios",
      description: "Operaciones relacionadas a usuarios ",
      externalDocs: {
        description: "Encuentra más información aquí",
        url: "https://swagger.io/docs/specification/authentication/",
      },
    },
  ],
  components: {
    securitySchemes: {
      petstore_auth: {
        type: "oauth2",
        flows: {
          implicit: {
            authorizationUrl: "http://petstore.swagger.io/oauth/dialog",
            scopes: {},
          },
        },
        description: "Autenticación mediante OAuth2 con flujo implícito",
      },
      api_key: {
        type: "apiKey",
        name: "api_key",
        in: "header",
        description: "Clave API enviada en el encabezado para autenticación",
      },
    },
    schemas: {
      user: {
        type: "object",
        description: "Schema que define la estructura de un usuario",
        required: ["displayName", "username", "email", "password"],
        properties: {
          id: {
            type: "int",
            description: "Id de usario",
            example: "1",
          },
          name: {
            type: "string",
            description: "El nombre del usuario",
            example: "Pioneros",
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["api/components/user/router.js"],
};
const openApiConfigration = swaggerJsdoc(options);

module.exports = openApiConfigration;
