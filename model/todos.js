const e = require("express");
const connection = require("../database/connection");
const {
  responseData,
  responseError,
  responseIdTodoNotFound,
  responseDataCannotBeNull,
} = require("../utils/response-handler");

const resDataById = (sql, params, code, res) => {
  connection.query(sql, params, function (err, results) {
    if (err) return responseError(res, 500, err);

    return responseData(res, code, results[0]);
  });
};

exports.getOneTodo = (res, state, id) => {
  connection.query(state, id, (err, results, fields) => {
    if (err) return responseError(res, 500, err);
    if (results.length === 0) return responseIdTodoNotFound(res, 404, id);

    return responseData(res, 200, results[0]);
  });
};

exports.getAllTodos = (res, state, activity_id) => {
  connection.query(state, activity_id, (err, results, fields) => {
    if (err) return responseError(res, 500, err);
    return responseData(res, 200, results);
  });
};

exports.createTodo = (res, state, data) => {
  if (!data.title) {
    return responseDataCannotBeNull(
      res,
      400,
      "Bad Request",
      "title cannot be null"
    );
  } else if (!data.activity_group_id) {
    return responseDataCannotBeNull(
      res,
      400,
      "Bad Request",
      "activity_group_id cannot be null"
    );
  }
  connection.query(state, data, (err, results, fields) => {
    if (err) return responseError(res, 500, err);
    const sql =
      "SELECT id,title,activity_group_id,is_active,priority,updatedAt,createdAt FROM todos WHERE id = ?";
    const id = [results.insertId];
    resDataById(sql, id, 201, res);
  });
};

exports.updateTodo = (res, searchState, updateState, id, data) => {
  connection.query(searchState, id, (err, results, fields) => {
    if (err) return responseError(res, 500, err);

    if (results.length) {
      if (!data) {
        return res.status(400).json({
          status: "Bad Request",
          message: "data wants to update canot be null",
        });
      }
      connection.query(updateState, [data, id], (err, results, fields) => {
        if (err) return responseError(res, 500, err);
        const sql = "SELECT * FROM todos WHERE id = ?";
        const params = id;

        resDataById(sql, params, 200, res);
      });
    } else {
      return responseIdTodoNotFound(res, 404, id);
    }
  });
};

exports.deleteTodo = (res, searchState, deleteState, id) => {
  connection.query(searchState, id, (err, results, fields) => {
    if (err) return responseError(res, 500, err);

    if (results.length) {
      connection.query(deleteState, id, (err, results, fields) => {
        if (err) return responseError(res, 500, err);
        return responseData(res, 200, {});
      });
    } else {
      return responseIdTodoNotFound(res, 404, id);
    }
  });
};
