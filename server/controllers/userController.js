const UserService = require("../services/userService");

class UserController {
  static async registerUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const newUser = await UserService.registerUser({ username, email, password });
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (!user) return res.status(404).json({ error: "User not found" });

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  /* TODO - add DELETE and UPDATE functions
  * to update we should use PATCH over PUT (there are certain keys we do not want to update at all)
  */
}

module.exports = UserController;
