const express = require("express");
const Product = require("../models/product");
const Category = require("../models/category");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({})
      .sort("-createdAt")
      .populate("category");
    res.render("shop/home", { pageName: "Home", products });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
