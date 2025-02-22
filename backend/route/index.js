const router = require("express").Router();
const taskRoute = require("./task.routes");

router.use("/tasks", taskRoute)

module.exports = router;