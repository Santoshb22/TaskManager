const TaskService = require("../service/task.service")
const TaskServiceInstance = new TaskService();
const createTask = async (req, res) => {
    try {
        const linkedFile = req.file? {data: req.file.buffer, contentType: req.file.mimetype} : null;
        const newTask = await TaskServiceInstance.createTask(req.body, linkedFile);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getTask = async (req, res) => {
    try {
        const tasks = await TaskServiceInstance.getAllTask();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const updateTask = async (req, res) => {
    const id = req.params.id;
    try {
        const taskUpdated = await TaskServiceInstance.updateTask(id, req.body);

        if(!taskUpdated){
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task Updated", task: taskUpdated });
     } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const taskDeleted = await TaskServiceInstance.deleteTask(id);
        if(!taskDeleted) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({message: "Task Deleted Successfully", deletedTask: taskDeleted });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getTask,
    deleteTask,
    updateTask,
    createTask
}