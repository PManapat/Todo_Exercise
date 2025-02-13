const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.post("/register", UserController.registerUser);
router.get("/:id", UserController.getUserById);
router.get("/", UserController.getAllUsers);

// route to delete a user
// route to update a user
module.exports = router;
