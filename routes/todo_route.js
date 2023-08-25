const express = require("express");
const { getTodos } = require("../services/todo_service");

const router = express.Router();

router.get("/", getTodos);

module.exports = router;
