const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");

const Logger = require("./config/logger");
const dbConnection = require("./config/database");
const todoRoute = require("./routes/todo_route");

dotenv.config({ path: "config.env" });
const app = express();

dbConnection();
app.use(express.json());

if (process.env.APP_ENV == "Development") {
  app.use(morgan("dev"));
  Logger.debug(`*** App Name: ${process.env.APP_NAME}`, "blue");
  Logger.debug(`*** Evironments: ${process.env.APP_ENV}`, "blue");
}

// Routes
app.use("/api/v1/todos", todoRoute);

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find this route: ${req.originalUrl}`);
  next(err.message);
});

// Global error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err, test: "test" });
});

const port = process.env.PORT;
app.listen(port, () => {
  Logger.log(`App running on port: ${port}`);
});
