const express = require("express");
const router = express.Router();
const { allProducts } = require("../controllers/product");

router.route("/").get(allProducts);

module.exports = router;
