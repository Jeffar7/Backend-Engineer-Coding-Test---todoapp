const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test-todolist",
});

connection.connect((err) => {
  if (err) throw error;
  console.log("Mysql Connected");
});

module.exports = connection;
