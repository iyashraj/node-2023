const fs = require("fs");
const express = require("express");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const server = express();
const morgan = require('morgan')

// 3rd party middleware
// bodyParser
server.use(express.json());
// server.use(express.static('public'))


// API - Endpoint
// API ROOT, base URL, eg- xyz.com/api/v2

// Read GET /products
server.get("/products/", (req, res) => {
    console.log(req.params)
  res.status(200).json(products);
});
// Read GET /products/:id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id 
  const filteredProduct = products.find((item)=> item.id === id)
  res.status(200).json(filteredProduct);
});

// Create POST /products
server.post("/products/", (req, res) => {
  console.log(req.body)
  products.push(req.body)
  res.status(201).json(req.body);
});


// Update PUT /products/:id
server.put("/products/:id", (req, res) => {
  const id = +req.params.id 
  const findIndex = products.findIndex((item)=> item.id === id)
  products.splice(findIndex, 1, {...req.body, id: id})
  res.status(204).json(req.body);
});

// Update PATCH /products/:id
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id 
  const findIndex = products.findIndex((item)=> item.id === id)
  const product = products[findIndex]
  products.splice(findIndex, 1, {...product,...req.body})
  res.status(204).json(product);
});

// Delete DELETE /products/:id
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const findIndex = products.findIndex((item)=> item.id === id)
  const product = products[findIndex]
  products.splice(findIndex, 1)
    res.status(200).json(product);
});

server.listen(8000, () => {
  console.log("server started");
});
