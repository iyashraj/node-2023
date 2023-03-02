const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// Model View Controller
exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).JSON(req.body);
};

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

exports.getSingleProduct = (req, res) => {
  const id = +req.params.id;
  const filteredProduct = products.find((item) => item.id === id);
  res.status(200).json(filteredProduct);
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const findIndex = products.findIndex((item) => item.id === id);
  const product = products[findIndex];
  products.splice(findIndex, 1, { ...product, ...req.body });
  res.status(204).json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const findIndex = products.findIndex((item) => item.id === id);
  products.splice(findIndex, 1, { ...req.body, id: id });
  res.status(204).json(req.body);
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const findIndex = products.findIndex((item) => item.id === id);
  const product = products[findIndex];
  products.splice(findIndex, 1);
  res.status(200).json(product);
};
