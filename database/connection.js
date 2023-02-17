const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "my-secret-pw",
  database: process.env.MYSQL_DBNAME || "todo4",
  port: process.env.MYSQL_PORT || "3306",
  typeCast: function (field, next) {
    if (field.type === "TINY" && field.length === 1) {
      return field.string() === "1";
    }
    return next();
  },
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Mysql Connected");
});

module.exports = connection;
