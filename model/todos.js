const { DataTypes, Sequelize } = require("sequelize");
const connection = require("../database/connection");

const todos = connection.define(
  "todo",
  {
    activity_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "very-high",
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "ok",
    },
  },
  {
    tableName: "todos",
  }
);

connection
  .sync()
  .then(() => {
    console.log("Todos table created");
  })
  .catch((err) => {
    console.error("Error creating Activity table:", err);
  });

module.exports = todos;
