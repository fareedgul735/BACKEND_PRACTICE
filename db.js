const { MongoClient } = require("mongodb");
const { DB_NAME } = require("./lib/constant");

const uri = "mongodb+srv://fareedgul735:fareedgul804@cluster0.0mkvvee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
let db = null;
const connectDB = async () => {
  try {
    await client.connect();
    db = client.db(DB_NAME);
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const getDB = async () => {
  if (!db) {
    await connectDB();
  }
  return db;
};

module.exports = { connectDB, getDB };
