const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("tools found");
  })
  .post((req, res) => {
    res.send("tool add");
  });

module.exports = router;
