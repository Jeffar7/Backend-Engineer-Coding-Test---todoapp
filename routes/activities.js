const activities = require("../controller/activitiescontroller");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .post(activities.createActivity)
  .get(activities.getAllActivities);
router.route("/:id").get(activities.getOneActivity);

module.exports = router;
