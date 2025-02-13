const TaskModel = require("../models/taskModel");

class TaskService {
  static async createTask({ title, order, user_id }) {
    return await TaskModel.createTask({ title, order, user_id });
  }

  static async getTaskById(id) {
    const task = await TaskModel.getTaskById(id);
    if (!task) throw new Error("Task not found");
    return task;
  }

  static async getTasksByUserId(user_id) {
    return await TaskModel.getTasksByUserId(user_id);
  }

  static async updateTask(id, updateData) {
    const updatedTask = await TaskModel.updateTask(id, updateData);
    if (!updatedTask.length) throw new Error("Task not found or not updated");
    return updatedTask;
  }

  static async deleteTask(id) {
    const deletedRows = await TaskModel.deleteTask(id);
    if (!deletedRows) throw new Error("Task not found");
    return { message: "Task deleted successfully" };
  }
}

module.exports = TaskService;
