const express = require("express");
require("express-async-errors");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const productRoutes = require("./routes/product");
const notfound = require("./middleware/notfound");
const errorMiddleware = require("./middleware/errorMiddleware");

// homepage
app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/api/v1/products", productRoutes);
app.use("*", notfound);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listen at post ${port}  ...`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
