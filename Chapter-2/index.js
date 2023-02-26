const http = require("http");
const fs = require("fs");

// EXAMPLE - 1
// const data = {
//     name: "yash raj",
//     email: "yashr30@gmail.com"
// }
// const server = http.createServer((req, res)=>{

//     console.log(req.url)
//     console.log(`server started`)
//     res.setHeader('Dummy', 'DummyValue')
//     res.setHeader("Content-Type", "application/json")
//     // res.setHeader("Content-Type", "text/html")
//     // res.end("<h1>hello<h1>");
//     res.end(JSON.stringify(data));
// }).listen(8080)

// EXAMPLE - 2
const index = fs.readFileSync("index.html", "utf-8");
// const data = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data.products;

// const server = http.createServer((req, res)=>{

//     console.log(`server started`)
//     res.setHeader("Content-Type", "text/html")
//     // res.setHeader("Content-Type", "application/json")
//     res.end(index);
//     // res.end(data);
// }).listen(8080)

// EXAMPLE - 3
const server = http
  .createServer((req, res) => {
    if (req.url.startsWith("/product")) {
      const id = req.url.split("/")[2];
      const prd = product.find((p) => p.id === +id);
      console.log(prd);
      res.setHeader("Content-Type", "text/html");
      const productIndex = index
        .replace("**title**", prd.title)
        .replace("**url**", prd.thumbnail)
        .replace("**price**", prd.price)
        .replace("**rating**", prd.rating);
      res.end(productIndex);
      return;
    }
    switch (req.url) {
      case "/":
        res.setHeader("Content-Type", "text/html");
        res.end(index);
        break;
      case "/api":
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
        break;
      // case "/products":
      //   res.setHeader("Content-Type", "text/html");
      //   const productIndex = index
      //     .replace("**title**", product.title)
      //     .replace("**url**", product.thumbnail).replace("**price**", product.price).replace("**rating**", product.rating);
      //   res.end(productIndex);
      default:
        res.writeHead(404, "Data Not Found");
        res.end();
    }
  })
  .listen(8080);
