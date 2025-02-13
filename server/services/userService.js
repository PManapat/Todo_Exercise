const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

class UserService {
  static async registerUser({ username, email, password }) {
    console.log("Registering User(): ", + username)
    const existingUser = await UserModel.getUserByEmail(email);
    if (existingUser) {
      throw new Error("User already exists with this email.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await UserModel.createUser({ username, email, password: hashedPassword });
  }

  static async getUserById(id) {
    console.log("Retrieving User by Id() ")
    console.log(id)
    return await UserModel.getUserById(id);
  }

  static async getAllUsers() {
    console.log("Retrieving All Users()")
    return await UserModel.getAllUsers();
  }
}

module.exports = UserService;
