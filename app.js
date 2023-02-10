const express = require("express");
const ActivityRouter = require("./routes/activities");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/activity-groups", ActivityRouter);

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`app running on PORT https://localhost:${PORT}`);
});
