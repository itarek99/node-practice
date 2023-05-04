const getAllTools = (req, res) => {
  res.send("tools found");
};
const addNewTool = (req, res) => {
  res.send("tool add");
};
module.exports = { getAllTools, addNewTool };
