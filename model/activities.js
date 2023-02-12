const connection = require("../database/connection");
const {
  responseData,
  responseIdNotFound,
  responseError,
} = require("../utils/response-handler");

const resDataById = (sql, params, code, res) => {
  connection.query(sql, params, function (err, results) {
    if (err) return responseError(res, 500, err);

    return responseData(res, code, results[0]);
  });
};

exports.getAllActivities = (res, state) => {
  connection.query(state, (err, results, field) => {
    if (err) return responseError(res, 500, err);

    return responseData(res, 200, results);
  });
};

exports.getOneActivity = (res, state, id) => {
  connection.query(state, id, (err, results, field) => {
    if (err) return responseError(res, 500, err);
    if (results.length === 0) return responseIdNotFound(res, 404, id);

    return responseData(res, 200, results[0]);
  });
};

exports.createActivity = (res, state, data) => {
  if (!data.title) {
    return res.status(400).json({
      status: "Bad Request",
      message: "Title cannot be null",
    });
  }

  connection.query(state, data, (err, results, field) => {
    if (err) return responseError(res, 500, err);

    const sql = "SELECT * FROM activities WHERE id = ?";
    const params = [results.insertId];

    resDataById(sql, params, 201, res);
  });
};

exports.updateActivity = (res, searchState, updateState, id, data) => {
  connection.query(searchState, id, (err, results, field) => {
    if (err) return responseError(res, 500, err);

    if (results.length) {
      if (!data.title) {
        return res.status(400).json({
          status: "Bad Request",
          message: "Title cannot be null",
        });
      }

      connection.query(updateState, [data, id], (err, results, field) => {
        if (err) return responseError(res, 500, err);

        const sql = `SELECT * FROM activities WHERE id = ?`;
        const params = [id];

        resDataById(sql, params, 200, res);
      });
    } else {
      return responseIdNotFound(res, 400, id);
    }
  });
};

exports.deleteActivity = (res, searchState, deleteState, id) => {
  connection.query(searchState, id, (err, results, fields) => {
    if (err) return responseError(res, 500, err);

    if (results.length) {
      connection.query(deleteState, id, (err, results, fields) => {
        if (err) return responseError(res, 500, err);

        return responseData(res, 200, {});
      });
    } else {
      return responseIdNotFound(res, 400, id);
    }
  });
};
