const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

// Model View Controller
exports.createUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).JSON(req.body);
};

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getSingleUser = (req, res) => {
  const id = +req.params.id;
  const filteredUser = users.find((item) => item.id === id);
  res.status(200).json(filteredUser);
};

exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((item) => item.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(204).json(user);
};

exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((item) => item.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(204).json(req.body);
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((item) => item.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(200).json(user);
};
