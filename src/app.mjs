import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/routes.mjs";

const app = express();
const PortNumber = 5000;
const LocalHost = "localhost";

app.use(bodyParser.json());

app.use(userRouter);
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB is connected");
    app.listen(PortNumber, LocalHost, () => {
      console.log(`Server is on ${LocalHost} ${PortNumber} `);
    });
  } catch (err) {
    console.log(err, "DB is not connected");
  }
};
startServer();
