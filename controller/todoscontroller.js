const Todo = require("./../model/todos");

exports.getAllTodos = async (req, res) => {
  const activity_group_id = req.query.activity_group_id;
  try {
    if (!activity_group_id) {
      const todos = await Todo.findAll();
      res.status(200).json({
        status: "Success",
        message: "Success",
        data: todos,
      });
    } else {
      const todo = await Todo.findAll({
        where: { activity_group_id: activity_group_id },
      });
      if (todo.length === 0) {
        res.status(200).json({
          status: "Success",
          message: "Success",
          data: [],
        });
      } else {
        res.status(200).json({
          status: "Success",
          message: "Success",
          data: todo,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getOneTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findByPk(id);

    if (!todo) {
      res.status(404).json({
        status: "Not Found",
        message: `Todo with ID ${id} Not Found`,
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Success",
        data: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.createTodo = async (req, res) => {
  const { title, activity_group_id, is_active } = req.body;

  if (!title) {
    res.status(400).json({
      status: "Bad Request",
      message: "title cannot be null",
    });
  } else if (!activity_group_id) {
    res.status(400).json({
      status: "Bad Request",
      message: "activity_group_id cannot be null",
    });
  } else {
    const active = is_active === true ? 1 : 0;
    try {
      const todo = await Todo.create(req.body);
      res.status(201).json({
        status: "Success",
        message: "Success",
        data: todo,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

exports.updateTodo = async (req, res) => {
  const { title, priority, is_active, status } = req.body;
  const id = req.params.id;

  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      res.status(404).json({
        status: "Not Found",
        message: `Todo with ID ${id} Not Found`,
      });
    } else {
      if (!req.body.title) {
        return res.status(400).json({
          status: "Bad Request",
          message: "title wants to update canot be null",
        });
      } else {
        checkprio = priority === undefined ? "very-high" : priority;
        checkstatus = status === undefined ? "ok" : status;

        todo.title = title;
        todo.priority = checkprio;
        todo.is_active = is_active;
        todo.status = checkstatus;
        todo.save();

        res.status(200).json({
          status: "Success",
          message: "Success",
          data: todo,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      res.status(404).json({
        status: "Not Found",
        message: `Todo with ID ${id} Not Found`,
      });
    } else {
      const data = todo.destroy();
      return res
        .status(200)
        .json({ status: "Success", message: "Success", data: data });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
