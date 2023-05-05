const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

const getAllTools = async (req, res, next) => {
  let db = getDb();

  try {
    const collection = await db.collection("tools");
    const result = await collection.find({}).project({}).toArray();
    res.status(200).send({ success: true, data: result });
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

    if (!result.insertedId) {
      return res.status(400).send({
        status: false,
        message: "something wrong",
      });
    }
    res.send({
      success: true,
      message: "tool added",
    });
  } catch (error) {
    next(error);
  }
};
const toolDetails = async (req, res, next) => {
  let db = getDb();
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.stats(400).send({ status: false, message: "invalid id" });
    }

    const collection = await db.collection("tools");
    const result = await collection.findOne({ _id: new ObjectId(id) });
    if (!result) {
      return res.status(404).send({ status: false, message: "data not found" });
    }
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
const toolDelete = async (req, res, next) => {
  let db = getDb();
  try {
    const { id } = req.params;
    const collection = await db.collection("tools");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (!result.deletedCount) {
      return res.status(409).send({ status: false, message: "failed to delete" });
    }
    res.status(200).send({ status: true, message: "successfully deleted" });
  } catch (error) {
    next(error);
  }
};
const toolUpdate = async (req, res, next) => {
  let db = getDb();
  try {
    const { id } = req.params;
    const collection = await db.collection("tools");
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: req.body,
    };
    const options = { upsert: false };
    const result = await collection.updateOne(filter, updateDoc, options);
    if (!result.matchedCount) {
      return res.status(400).send({ status: false, message: "failed to update" });
    }
    res.status(200).send({ status: true, message: "successfully updated" });
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllTools, addNewTool, toolDetails, toolDelete, toolUpdate };
