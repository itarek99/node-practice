const express = require("express");
const { getAllTools, addNewTool } = require("../controllers/tools.controller");

const router = express.Router();

/*
router.get("/", (req, res) => {
  res.send("tools found");
});
*/

router.route("/").get(getAllTools).post(addNewTool);

module.exports = router;
