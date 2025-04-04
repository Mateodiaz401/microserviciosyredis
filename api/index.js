const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerUI = require("swagger-ui-express");
const openApiConfigration = require("./docs/swagger");

const user = require("./components/user/router.js"); // Importa el enrutador
const config = require("../config.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const swaggerDoc = require("./swagger.json");

// ROUTER
app.use("/api/user", user);
// app.use("/api/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(openApiConfigration));
app.get("/api/v1/swagger.json", (req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.send(openApiConfigration);
});

app.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto", config.api.port);
});
