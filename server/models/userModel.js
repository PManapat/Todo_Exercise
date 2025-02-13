const knex = require("../knex");

class UserModel {
  static async createUser({ username, email, password }) {
    return await knex("users").insert({ username, email, password }).returning("*");
  }

  static async getUserById(id) {
    return await knex("users").where({ id }).first();
  }

  static async getUserByEmail(email) {
    return await knex("users").where({ email }).first();
  }

  static async getAllUsers() {
    return await knex("users").select("id", "username", "email", "created_at");
  }
}

module.exports = UserModel;
