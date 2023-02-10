const activities = require("../model/activities");

exports.getAllActivities = (req, res) => {
  const query = "SELECT * FROM activities";

  activities.getAllActivities(res, query);
};
exports.getOneActivity = (req, res) => {
  const query = `SELECT * FROM activities WHERE id = ${req.params.id}`;

  activities.getOneActivity(res, query);
};
exports.createActivity = (req, res) => {
  const data = { ...req.body };
  const query = "INSERT INTO activities SET ?";
  console.log(data);

  activities.createActivity(res, query, data);
};
