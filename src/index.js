const express = require("express");
const { ServerConfig } = require("./config");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(ServerConfig.PORT, () => {
  console.log("Server Started Succesfully");
 });

app.use("/api", routes);
