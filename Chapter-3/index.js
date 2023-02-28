const fs = require("fs");
const express = require("express");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const server = express();
const morgan = require('morgan')

// middleware : it will pause the request for further process
// server.use((req, res, next) => {
//   console.log(req.ip, req.hostname, new Date());
//   next();
// });


// 3rd party middleware
// bodyParser
server.use(express.json());
server.use(express.urlencoded());
// server.use(express.static('public'))
// server.use(morgan('default'))
//middleware
const authGet = ((req, res, next) => {
    // it will check password in params
//   if (req.query.password == "123") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
});

const authPost = (req, res, next) => {
    // it will check password in post request body
  if (req.body.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// API - Endpoint
server.get("/product/:id", authGet, (req, res) => {
    console.log(req.params)
  res.json({ type: "GET" });
});
server.post("/",authPost, (req, res) => {
  res.json({ type: "POST" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

// server.get("/demo", (req, res) => {
//   // res.json(products)
//   res.send("<h1>Hello</h1>");
//   // res.sendFile('/home/yash/Desktop/CoderDost- NodeJs/Chapter-3/index.html')
//   res.sendStatus(200);
// });

server.listen(8000, () => {
  console.log("server started");
});
