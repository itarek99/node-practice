const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: async function (callback) {
    try {
      await client.connect();
    } catch (error) {
      callback(error);
    }

    _db = client.db("tools");

    return callback();
  },
  getDb: function () {
    return _db;
  },
};
