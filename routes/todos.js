const todos = require("../controller/todoscontroller");
const express = require("express");
const router = express.Router();

router
  .route("/:id")
  .patch(todos.updateTodo)
  .delete(todos.deleteTodo)
  .get(todos.getOneTodo);
router.route("/").post(todos.createTodo).get(todos.getAllTodos);

module.exports = router;
