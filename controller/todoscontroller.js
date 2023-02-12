const {
  getOneTodo,
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../model/todos");

exports.getOneTodo = (req, res) => {
  const query = "SELECT * FROM todos WHERE id = ?";
  const id = req.params.id;
  getOneTodo(res, query, id);
};

exports.getAllTodos = (req, res) => {
  const activity_group_id = req.query.activity_group_id;
  if (activity_group_id) {
    const query = "SELECT * FROM todos WHERE activity_group_id = ?";
    getAllTodos(res, query, activity_group_id);
  } else {
    const query = "SELECT * FROM todos";
    getAllTodos(res, query);
  }
};

exports.createTodo = (req, res) => {
  const data = { ...req.body };
  const query = "INSERT INTO todos SET ?";

  createTodo(res, query, data);
};

exports.updateTodo = (req, res) => {
  const data = { ...req.body };
  const querySearch = "SELECT * FROM todos WHERE id = ?";
  const queryUpdate = "UPDATE todos SET ? WHERE id = ?";

  console.log(data, req.params.id);
  updateTodo(res, querySearch, queryUpdate, req.params.id, data);
};

exports.deleteTodo = (req, res) => {
  const querySearch = "SELECT * FROM todos WHERE id = ?";
  const queryDelete = "DELETE FROM todos WHERE id = ?";

  deleteTodo(res, querySearch, queryDelete, req.params.id);
};
