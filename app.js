require("dotenv").config();
const express = require("express");
const ActivityRouter = require("./routes/activities");
const TodosRouter = require("./routes/todos");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/", (res) => {
  res.statusCode(200).json({
    success: "success",
  });
});
app.use("/activity-groups", ActivityRouter);
app.use("/todo-items", TodosRouter);

const PORT = 3030;

app.listen(PORT, (err) => {
  console.log(`app running on PORT https://localhost:${PORT}`);
  if (err) {
    console.log(err);
  }
});
