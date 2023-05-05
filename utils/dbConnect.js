const { MongoClient } = require("mongodb");
const Db = process.env.MONGO_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

const connectToServer = async (callback) => {
  try {
    await client.connect();
    _db = client.db("tools");
    callback();
  } catch (error) {
    callback(error);
  }
};
const getDb = () => {
  return _db;
};

module.exports = { connectToServer, getDb };
