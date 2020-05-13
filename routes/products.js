const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Category = require("../models/category");
var moment = require("moment");

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

router.get("/:slug/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    res.render("shop/product", {
      pageName: product.title,
      product,
      moment: moment,
    });
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
});

module.exports = router;
