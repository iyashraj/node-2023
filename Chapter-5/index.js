const express = require("express");
const server = express();
const morgan = require("morgan");
const productRouter = require("./routes/product");
const  userRouter  = require("./routes/user");

// bodyParser
server.use(express.json());
server.use(express.static("public"));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

// model view controller

server.listen(8000, () => {
  console.log("server started");
});
