const connection = require("../database/connection");

exports.getAllActivities = (res, state) => {
  connection.query(state, (err, rows, field) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        message: err,
      });
    }

    return res.status(200).json({
      status: "success",
      data: rows,
    });
  });
};
