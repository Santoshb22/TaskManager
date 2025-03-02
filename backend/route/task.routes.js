const router = require("express").Router();
const upload = require("../config/multerConfig");
const { getTask, 
    createTask, 
    updateTask, 
    deleteTask 
      } = require("../controller/taskController");
const validate = require("../middleware/validate");
const {taskValidation} = require("../validation");

router.get("/", getTask);

router.post("/", validate(taskValidation.createTaskValidation), upload.single("pdf"), createTask);

router.patch("/:id", validate(taskValidation.updateTaskValidation), updateTask);

router.delete("/:id", deleteTask);

module.exports = router;