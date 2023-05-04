const getAllTools = (req, res) => {
  res.send("tools found");
};
const addNewTool = (req, res) => {
  res.send("tool add");
};
const toolDetails = (req, res) => {
  const { params } = req;

  res.send("tool details for " + params.id);
};
module.exports = { getAllTools, addNewTool, toolDetails };
