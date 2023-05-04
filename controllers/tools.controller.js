const tools = [
  { id: 1, title: "Hammer" },
  { id: 2, title: "Screwdriver" },
  { id: 3, title: "Pliers" },
  { id: 4, title: "Wrench" },
  { id: 5, title: "Chisel" },
];

const getAllTools = (req, res) => {
  res.json(tools);
};
const addNewTool = (req, res) => {
  const newTool = req.body;
  tools.push(newTool);
  res.json(tools);
};
const toolDetails = (req, res) => {
  const { params } = req;
  const tool = tools.find((tool) => tool.id === +params.id);
  res.json(tool);
};
module.exports = { getAllTools, addNewTool, toolDetails };
