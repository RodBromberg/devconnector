const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @desc Test profile route
// @access Public
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Profile succesfully works" });
});

module.exports = router;
