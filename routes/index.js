var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  res.render("shop/home", { pageName: "Home" });
});

module.exports = router;
