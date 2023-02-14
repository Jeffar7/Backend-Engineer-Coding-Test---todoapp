const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test-todolist",
  typeCast: function (field, next) {
    if (field.type === "TINY" && field.length === 1) {
      return field.string() === "1";
    }
    return next();
  },
});

connection.connect((err) => {
  if (err) throw error;
  console.log("Mysql Connected");
});

module.exports = connection;
