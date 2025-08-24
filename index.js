const bodyParser = require("body-parser");
// const { bodyParser } = require("./middleware/bodyParser");
const express = require("express");
const app = express();
const PortNumber = 5000;
const LocalHost = "localhost";
let UsersData = [];

app.use(bodyParser.json());

// app.post("/user",bodyParser.json(), (req, res) => {
//   const userData = {
//     ...req.body,
//     userId: Date.now(),
//   };
//   UsersData.push(userData);
//   res.status(201).json({ data: UsersData });
// });

// app.get("/user", (req, res) => {
//   res.status(200).json({ data: UsersData });
//   console.log(UsersData);
// });

// app.delete("/user/:id", (req, res) => {
//   const { id } = req.params;
//   const index = UsersData.findIndex((data) => data.userId == id);

//   if (index === -1) {
//     return res.status(404).json({ message: `User id is ${id} notFound` });
//   }

//   const deletedUser = UsersData.splice(index, 1);

//   res.json({
//     data: UsersData,
//     message: deletedUser[0],
//     message: `${id} is Deleted`,
//   });
// });

// app.get("/user/:id", (req, res) => {
//   const { id } = req.params;
//   const uniqueUser = UsersData.find((u) => u.userId == id);
//   res.status(200).json({ data: uniqueUser });
// });

// app.put("/user/:id",bodyParser.json(), (req, res) => {
//   const { id } = req.params;

//   const exisitingUser = UsersData.find((u) => u.userId == id);
//   const newUser = UsersData.filter((user) => user.userId != id);
//   let updatedUser = {
//     ...req.body,
//     userId: exisitingUser.userId,
//   };
//   newUser.push(updatedUser);
//   UsersData = newUser;

//   res.status(201).json({ data: updatedUser });
// });

app.post("/user", (req, res) => {
  const userDetail = {
    ...req.body,
    userId: Date.now(),
  };
  UsersData.push(userDetail);
  res.status(201).json({ UserInformation: UsersData });
});
app.get("/user", (req, res) => {
  res.status(200).json({ userInformation: UsersData });
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const uniqueUser = UsersData.find((user) => user.userId == id);
  res.status(201).json({ userInformation: uniqueUser });
});

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  UsersData = UsersData.filter((u) => u.userId != id);
  res.json({
    userInformation: UsersData,
    message: `User Deleted SuccessFully !`,
  });
});

app.put("/user/:id", (req, res) => {
  const { id } = req.params;

  const exisitingUser = UsersData.find((u) => u.userId == id);

  const newUser = UsersData.filter((u) => u.userId != id);

  const updatedUser = {
    ...req.body,
    userId: exisitingUser.userId,
  };
  newUser.push(updatedUser);
  UsersData = newUser;
  res.status(201).json({ UpdatedUser: updatedUser, allUser: UsersData });
});

app.listen(PortNumber, LocalHost, () => {
  console.log(`server is on ${LocalHost} ${PortNumber}`);
});
