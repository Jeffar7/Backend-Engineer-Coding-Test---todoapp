const activities = require("../controller/activitiescontroller");
const express = require("express");
const router = express.Router();

router.route("/").get(activities.getAllActivities);

module.exports = router;
