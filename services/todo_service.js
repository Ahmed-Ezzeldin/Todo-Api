const Logger = require("../config/logger");
const TodoModel = require("../models/todo_model");

exports.getTodos = (req, res) => {
  const name = req.body.name;
  const newTodo = new TodoModel({ name: name });
  newTodo
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};
