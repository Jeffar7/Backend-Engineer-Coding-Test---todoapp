const todos = require("../controller/todoscontroller");
const express = require("express");
const router = express.Router();

router
  .route("/:id")
  .get(todos.getOneTodo)
  .patch(todos.updateTodo)
  .delete(todos.deleteTodo);
router.route("/").get(todos.getAllTodos).post(todos.createTodo);

module.exports = router;
