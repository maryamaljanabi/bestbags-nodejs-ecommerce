const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Category = require("../models/category");
var moment = require("moment");

// get all products
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

// get a certain category by its slug (this is used for the categories navbar)
router.get("/:slug", async (req, res) => {
  try {
    const foundCategory = await Category.findOne({ slug: req.params.slug });
    const allProducts = await Product.find({ category: foundCategory.id })
      .sort("-createdAt")
      .populate("category");

    res.render("shop/index", {
      pageName: foundCategory.title,
      currentCategory: foundCategory,
      products: allProducts,
    });
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
});

// get a certain product by its id
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
