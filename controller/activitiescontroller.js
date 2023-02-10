const activities = require("../model/activities");

exports.getAllActivities = (req, res) => {
  const query = "SELECT * FROM activities";

  activities.getAllActivities(res, query);
};
