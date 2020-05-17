const express = require("express");
const csrf = require("csurf");
const router = express.Router();

const csrfProtection = csrf();
router.use(csrfProtection);

//GET: display contact us page and form with csrf tokens
router.get("/contact-us", (req, res) => {
  const successMsg = req.flash("success")[0];
  res.render("pages/contactUs", {
    pageName: "Contact Us",
    csrfToken: req.csrfToken(),
    successMsg,
  });
});

module.exports = router;
