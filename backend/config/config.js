const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

module.exports = {
    port: process.env.PORT || 3000,
    mongoDB_URL: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/myapp"
};
