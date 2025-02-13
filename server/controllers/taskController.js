const TaskService = require("../services/taskService");

class TaskController {
  static async createTask(req, res) {
    try {
      const { title, order, user_id } = req.body;
      const newTask = await TaskService.createTask({ title, order, user_id });
      res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getTaskById(req, res) {
    try {
      const { id } = req.params;
      const task = await TaskService.getTaskById(id);
      res.json(task);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async getTasksByUserId(req, res) {
    try {
      const { user_id } = req.params;
      const tasks = await TaskService.getTasksByUserId(user_id);
      res.json(tasks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateTask(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedTask = await TaskService.updateTask(id, updateData);
      res.json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const response = await TaskService.deleteTask(id);
      res.json(response);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = TaskController;
