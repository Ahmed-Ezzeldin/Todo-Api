const express = require("express");
const {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../services/todo_service");
const { createTodoValidator } = require("../validators/todo_validator");

const router = express.Router();

router.route("/").get(getAllTodos).post(createTodoValidator, createTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);
module.exports = router;
