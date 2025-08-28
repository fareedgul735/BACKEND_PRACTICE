const bodyParser = require("body-parser");
// const { bodyParser } = require("./middleware/bodyParser");
const express = require("express");
const { getDB, connectDB } = require("./db");
const { ObjectId } = require("mongodb");
const app = express();
const PortNumber = 5000;
const LocalHost = "localhost";

app.use(bodyParser.json());

app.post("/user", async (req, res) => {
  try {
    const userData = {
      ...req.body,
    };
    const dataBase = await getDB();
    await dataBase.collection("users").insertOne(userData);
    console.log(dataBase, "dataBase");
    res.status(201).json({ users: userData });
  } catch (err) {
    console.log(err);
  }
});

app.get("/user", async (req, res) => {
  try {
    const dataBase = await getDB();
    const users = await dataBase.collection("users").find().toArray();
    console.log(users);
    res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error " });
  }
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const dataBase = await getDB();
  const userId = new ObjectId(id);
  const condition = { _id: userId };
  const uniqueUser = await dataBase.collection("users").findOne(condition);
  res.status(201).json({ uniqueUser });
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const dataBase = await getDB();
  const userId = new ObjectId(id);
  const condition = { _id: userId };
  const deletedUser = await dataBase.collection("users").deleteOne(condition);

  res.json({
    deletedUser,
    message: `User Deleted SuccessFully !`,
  });
});

app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const dataBase = await getDB();
  const userId = new ObjectId(id);
  const condition = { _id: userId };
  const exisitingUser = dataBase.collection("users").findOne(condition);

  const updatedUser = {
    ...payload,
    ...exisitingUser,
  };
  await dataBase
    .collection("users")
    .updateOne(condition, { $set: updatedUser });

  res.status(201).json({ updatedUser, message: "User Update successfully" });
});

const startServer = async () => {
  await connectDB();
  app.listen(PortNumber, LocalHost, () => {
    console.log(`app is running on , and ${LocalHost}:${PortNumber}`);
  });
};

startServer();
