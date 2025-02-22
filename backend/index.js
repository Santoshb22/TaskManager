const mongoose = require("mongoose");
require('dotenv').config();
const app = require("./app");

const server = app;

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`server is listenening to the port: ${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
.then(() => console.log("Databse Connected"));
