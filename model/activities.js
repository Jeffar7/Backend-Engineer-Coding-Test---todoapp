const { DataTypes, Sequelize } = require("sequelize");
const connection = require("../database/connection");

const activity = connection.define("activity", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

connection
  .sync()
  .then(() => {
    console.log("Activity table created");
  })
  .catch((err) => {
    console.error("Error creating Activity table:", err);
  });

module.exports = activity;
