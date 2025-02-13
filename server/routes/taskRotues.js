const express = require("express");
const TaskController = require("../controllers/taskController");

const router = express.Router();

router.post("/", TaskController.createTask);
router.get("/:id", TaskController.getTaskById);
router.get("/user/:user_id", TaskController.getTasksByUserId);
router.put("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

module.exports = router;
