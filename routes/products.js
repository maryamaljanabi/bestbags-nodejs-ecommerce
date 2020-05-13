const express = require("express");
const router = express.Router();
const Product = require("../models/product");
var Category = require("../models/category");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({})
      .sort("-createdAt")
      .populate("category");
    res.render("shop/index", {
      pageName: "All Products",
      products,
      home: "/products/?",
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
