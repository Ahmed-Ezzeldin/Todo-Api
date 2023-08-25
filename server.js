const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");

const LoggerTest = require("./logger");
const Logger = require("./logger");
const dbConnection = require("./database");

dotenv.config({ path: "config.env" });
const app = express();

dbConnection();

app.use(express.json());

if (process.env.APP_ENV == "Development") {
  app.use(morgan("dev"));
  Logger.debug(`Evironments: ${process.env.APP_ENV}`, "blue");
  Logger.debug(`Datebase: ${process.env.DB_URI}`, "blue");
}

const todoSchema = new mongoose.Schema({
  name: String,
});
const TodoModel = new mongoose.model("Todo", todoSchema);

app.post("/", (req, res) => {
  const name = req.body.name;
  Logger.debug(req.body.name);
  Logger.debug(name);
  const newTodo = new TodoModel({ name: name });
  newTodo
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/", (req, res) => {
  res.send("Todo App API");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
