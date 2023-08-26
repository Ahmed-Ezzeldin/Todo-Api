const Logger = require("../config/logger");
const TodoModel = require("../models/todo_model");

exports.createTodo = async (req, res) => {
  try {
    const todo = await TodoModel.create({
      title: req.body.title,
      content: req.body.content,
      isDone: req.body.isDone,
    });
    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find({});
    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
