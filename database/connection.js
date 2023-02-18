const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.MYSQL_DBNAME || "todo4",
  process.env.MYSQL_USER || "root",
  process.env.MYSQL_PASSWORD || "my-secret-pw",
  {
    host: process.env.MYSQL_HOST || "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
