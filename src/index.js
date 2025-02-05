const express = require("express");
const { ServerConfig, Logger } = require("./config");
const routes = require("./routes");
const { connectDB } = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(ServerConfig.PORT, () => {
  console.log("started");
  // connectDB();
 });

app.use("/api", routes);
