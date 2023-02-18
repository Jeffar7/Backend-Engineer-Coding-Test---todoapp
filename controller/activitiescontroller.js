const Activity = require("./../model/activities");

exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).json({
      status: "Success",
      message: "Success",
      data: activities,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.getOneActivity = async (req, res) => {
  const id = req.params.id;
  try {
    const activity = await Activity.findByPk(id);
    if (!activity) {
      res.status(404).json({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Success",
        data: activity,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.createActivity = async (req, res) => {
  const { title, email } = req.body;
  if (!title) {
    res.status(400).json({
      status: "Bad Request",
      message: "title cannot be null",
    });
  } else {
    try {
      const activity = await Activity.create({ title, email });
      res.status(201).json({
        status: "Success",
        message: "Success",
        data: activity,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};
exports.updateActivity = async (req, res) => {
  const { title } = req.body;
  const id = req.params.id;
  if (!title) {
    res.status(400).json({
      status: "Bad Request",
      message: "title cannot be null",
    });
  }
  try {
    const activity = await Activity.findByPk(id);
    if (!activity) {
      res.status(404).json({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
      });
    } else {
      activity.title = title;
      activity.save();
      res.status(200).json({
        status: "Success",
        message: "Success",
        data: activity,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.deleteActivity = async (req, res) => {
  const id = req.params.id;

  try {
    const activity = await Activity.findByPk(id);
    if (!activity) {
      res.status(404).json({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
      });
    } else {
      const data = activity.destroy();
      return res
        .status(200)
        .json({ status: "Success", message: "Success", data: data });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
