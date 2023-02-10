const mongoose = require("mongoose");
const connectDb = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url).then(() => {
    console.log("mongoDB is connected");
  });
};
module.exports = connectDb;
