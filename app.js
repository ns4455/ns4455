const express = require("express");
const app = express();
require("dotenv").config();
const tasks = require("./routes/tasks");
const connectToDb = require("./db/connect");

// Middlewares
app.use(express.json());

const port = 3000;

app.use("/api/v1/tasks", tasks);

const startServer = async () => {
  try {
    await connectToDb(process.env.DB_URL);
    console.log("DB Connected");
    app.listen(port, console.log(`Server is active on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

startServer();
