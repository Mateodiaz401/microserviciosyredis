const express = require("express");
const user = require("./components/user/router.js"); // Importa el enrutador
const config = require("../config.js");

const app = express();

// ROUTER
app.use("/api/user", user);

app.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto", config.api.port);
});
