const express = require('express');
const { PORT } = require("./config");
const routes = require('./routes')

const app = express();

app.listen(PORT,()=>{
    console.log("started");
})

app.use('/api',routes)