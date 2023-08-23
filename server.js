const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const LoggerTest = require("./logger");

dotenv.config({ path: "config.env" });
const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
  const user = {
    Name: "test usernames",
    email: "test@email.com",
    age: "25",
    jop: "Software Engineer",
  };
  //   LoggerTest.testFun("Hello world!");
}

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("Todo App API");
});
