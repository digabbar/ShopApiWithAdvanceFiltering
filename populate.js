require("dotenv").config();
const Product = require("./model/product");
const data = require("./products.json");
const connectDB = require("./db/connect");
const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI);
    // populate in DB
    await Product.deleteMany();
    await Product.create(data);
    console.log("data is loaded successfully");
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
};
start();
