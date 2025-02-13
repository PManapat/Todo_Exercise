const knex = require("../knex");

class TaskModel {
  static async createTask({ title, order, user_id }) {
    return await knex("tasks")
      .insert({ title, order, user_id })
      .returning("*");
  }

  static async getTaskById(id) {
    return await knex("tasks").where({ id }).first();
  }

  static async getTasksByUserId(user_id) {
    return await knex("tasks").where({ user_id }).orderBy("order");
  }

  static async updateTask(id, updateData) {
    return await knex("tasks")
      .where({ id })
      .update({ ...updateData, updated_at: knex.fn.now() })
      .returning("*");
  }

  static async deleteTask(id) {
    return await knex("tasks").where({ id }).del();
  }
}

module.exports = TaskModel;
