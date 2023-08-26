const { check } = require("express-validator");
const validatorMiddleware = require("../middlewares/validator_middleware");
const Logger = require("../config/logger");
const TodoModel = require("../models/todo_model");

exports.createTodoValidator = [
  check("title")
    .notEmpty()
    .withMessage("title is required")
    .isLength({ min: 2 })
    .withMessage("title must be at least 2 characters")
    .isLength({ max: 32 })
    .withMessage("title must be at most 32 characters")
    .custom(async (value) => {
      const todo = await TodoModel.findOne({ title: value });
      if (todo) {
        return Promise.reject(new Error("title must be unique"));
      }
    }),

  check("content")
    .notEmpty()
    .withMessage("content is required")
    .isLength({ min: 1 })
    .withMessage("content must be at least 1 characters")
    .isLength({ max: 800 })
    .withMessage("content must be at most 800 characters"),

  validatorMiddleware,
];
