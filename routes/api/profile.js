const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// @route GET api/profile/test
// @desc Test profile route
// @access Public
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Profile succesfully works" });
});

router.get("/info", (req, res) => {
  User.getUsers({
    showCredentials: true
  })
    .then(user => {
      res.status(200).json({ user, message: "Sent Succesfull" });
    })
    .catch(err => {
      res.status(404).json({ err, error: "error bruh" });
    });
});

module.exports = router;
