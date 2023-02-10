const express = require("express");
const ActivityRouter = require("./routes/activities");

const app = express();

app.use("/activity-groups", ActivityRouter);

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`app running on PORT https://localhost:${PORT}`);
});
