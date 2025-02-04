const express = require("express");
const { ServerConfig, Logger } = require("./config");
const routes = require("./routes");

const app = express();

app.listen(ServerConfig.PORT, () => {
  console.log("started");
 });

app.use("/api", routes);
