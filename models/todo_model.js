const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: String,
});

const TodoModel = new mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
