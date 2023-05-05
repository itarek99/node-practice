const { getDb } = require("../utils/dbConnect");

const tools = [
  { id: 1, title: "Hammer" },
  { id: 2, title: "Screwdriver" },
  { id: 3, title: "Pliers" },
  { id: 4, title: "Wrench" },
  { id: 5, title: "Chisel" },
];

const getAllTools = async (req, res, next) => {
  let db = getDb();

  try {
    const collection = await db.collection("tools");
    const result = await collection.find({}).toArray();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const addNewTool = async (req, res, next) => {
  let db = getDb();
  try {
    const collection = await db.collection("tools");
    const tool = req.body;
    tool.date = new Date();
    const result = await collection.insertOne(tool);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const toolDetails = (req, res) => {
  const { params } = req;
  const tool = tools.find((tool) => tool.id === +params.id);
  res.json(tool);
};
module.exports = { getAllTools, addNewTool, toolDetails };
