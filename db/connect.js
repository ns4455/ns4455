const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const connectToDb = (url) => {
  return mongoose.connect(url);
};

module.exports = connectToDb;
