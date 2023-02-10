const connection = require("../database/connection");

exports.getAllActivities = (res, state) => {
  connection.query(state, (err, results, field) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: err,
      });
    }

    return res.status(200).json({
      status: "success",
      data: results,
    });
  });
};

exports.getOneActivity = (res, state) => {
  connection.query(state, (err, results, field) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: err,
      });
    }

    return res.status(200).json({
      status: "success",
      data: results,
    });
  });
};

exports.createActivity = (res, state, data) => {
  connection.query(state, data, (err, results, field) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: err,
      });
    }

    const sql = "SELECT * FROM activities WHERE id = ?";
    const params = [results.insertId];

    connection.query(sql, params, function (err, results) {
      if (err) {
        console.error("Error executing query: " + err.stack);
        return;
      }
      return res.status(201).json({
        status: "Success",
        message: "Success",
        data: results[0],
      });
    });
  });
};
