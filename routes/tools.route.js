const express = require("express");
const { getAllTools, addNewTool, toolDetails } = require("../controllers/tools.controller");
const viewCount = require("../middleware/viewCount");

const router = express.Router();

/*
router.get("/", (req, res) => {
  res.send("tools found");
});
*/

router.route("/").get(getAllTools).post(addNewTool);
router.route("/:id").get(viewCount, toolDetails);

module.exports = router;
