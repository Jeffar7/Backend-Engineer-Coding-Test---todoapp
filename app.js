require("dotenv").config();
const express = require("express");
const ActivityRouter = require("./routes/activities");
const TodosRouter = require("./routes/todos");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/activity-groups", ActivityRouter);
app.use("/todo-items", TodosRouter);

const port = process.env.PORT || 3030;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`App runing on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
