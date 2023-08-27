const TodoModel = require("../models/todo_model");

// @desc ------> Get All Todo
// @route -----> GET api/v1/todos
// @access ----> Public
exports.getAllTodos = async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  try {
    const todos = await TodoModel.find({}).skip(skip).limit(limit);
    res.status(200).json({ results: todos.length, page: page, data: todos });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// @desc ------> Create Todo
// @route -----> POST api/v1/todos
// @access ----> Public
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

// @desc ------> Get Todo By id
// @route -----> GET api/v1/todos/:id
// @access ----> Public
exports.getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await TodoModel.findById(id);
    if (!todo) {
      res.status(404).json({ msg: `No todo for this id ${id}` });
    } else {
      res.status(200).json({ data: todo });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
// @desc ------> Update Todo By id
// @route -----> PUT api/v1/todos/:id
// @access ----> Private
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const { content } = req.body;
    const { isDone } = req.body;
    const todo = await TodoModel.findOneAndUpdate(
      { _id: id },
      { title: title, content: content, isDone: isDone },
      { new: true }
    );
    if (!todo) {
      res.status(404).json({ msg: `No todo for this id ${id}` });
    }
    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// @desc ------> Delete Todo By id
// @route -----> DELETE api/v1/todos/:id
// @access ----> Private
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findByIdAndDelete(id);
    if (!todo) {
      res.status(404).json({ msg: `No todo for this id ${id}` });
    }
    res.status(200).json({ data: "Item deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
