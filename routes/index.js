const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("shop/home", { pageName: "Home" });
});

module.exports = router;
