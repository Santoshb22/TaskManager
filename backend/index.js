const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config.js");

const server = app;

const port = config.port;

server.listen(port, () => {
    console.log(`server is listenening to the port: ${port}`)
})

mongoose.connect(config.mongoDB_URL)
.then(() => console.log("Databse Connected"));
