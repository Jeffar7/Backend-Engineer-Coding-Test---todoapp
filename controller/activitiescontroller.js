const {
  createActivity,
  deleteActivity,
  getAllActivities,
  getOneActivity,
  updateActivity,
} = require("../model/activities");

exports.getAllActivities = (req, res) => {
  const query = "SELECT * FROM activities";

  getAllActivities(res, query);
};
exports.getOneActivity = (req, res) => {
  const query = "SELECT * FROM activities WHERE id = ?";

  getOneActivity(res, query, req.params.id);
};
exports.createActivity = (req, res) => {
  const data = { ...req.body };
  const query = "INSERT INTO activities SET ?";

  createActivity(res, query, data);
};
exports.updateActivity = (req, res) => {
  const data = { ...req.body };
  const querySearch = "SELECT * FROM activities WHERE id = ?";
  const queryUpdate = "UPDATE activities SET ? WHERE id = ?";

  updateActivity(res, querySearch, queryUpdate, req.params.id, data);
};
exports.deleteActivity = (req, res) => {
  const querySearch = "SELECT * FROM activities WHERE id = ?";
  const queryDelete = "DELETE FROM activities WHERE id = ?";

  deleteActivity(res, querySearch, queryDelete, req.params.id);
};
