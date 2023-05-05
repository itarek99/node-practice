const express = require("express");
const { getAllTools, addNewTool, toolDetails, toolDelete } = require("../controllers/tools.controller");
const viewCount = require("../middleware/viewCount");

const router = express.Router();

/*
router.get("/", (req, res) => {
  res.send("tools found");
});
*/

router.route("/").get(getAllTools).post(addNewTool);
router.route("/:id").get(toolDetails).delete(toolDelete);

module.exports = router;
