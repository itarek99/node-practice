const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("tools found");
});

router.post("/", (req, res) => {
  res.send("tool add");
});

module.exports = router;
