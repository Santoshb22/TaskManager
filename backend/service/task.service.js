const Task = require("../model/task.model");
class TaskService {

   createTask = async (task, linkedFile) => {
      const taskWithFile = {
        ...task,
        file: linkedFile,
      };
    
      const createdTask = await Task.create(taskWithFile);
      await createdTask.save();
      return createdTask;
    };

 getAllTask = async () => {
    return Task.find({});
}

 updateTask = async (taskId, taskData) => {
    const task = await Task.findOne({_id: taskId});
    if(!task) {
    throw new Error("Task not found");
    }

    const taskUpdated = await Task.findByIdAndUpdate(taskId, taskData, {new: true});
    return taskUpdated;
}

 deleteTask = async (id) => {
    const taskDeleted = await Task.findByIdAndDelete(id, {new: true});
    return taskDeleted;
}

}

module.exports = TaskService;