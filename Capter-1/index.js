// self-created module
const lib = require("./lib")
// file-system module
const fs = require('fs')
// express js module
const express = require("express")

// always use async red/write file, it will save time
// const t1 = performance.now()
// console.log(t1)
// const txt = fs.readFileSync('demo.txt', "utf-8");
// fs.readFile('demo.txt', "utf-8", (err, res)=>{
// console.log(res)
// });
// console.log(txt);

// console.log(lib.sum(4,5), lib.diff(6,3))


// Note 1: dev-dependency is the dependency which is going to use in development process only
// Note 2: if uh wanna run server, then you have to add a special script in "package.json", "start" : "node filename.js";
// express 
console.log("hello, 2")
const server = express();
server.listen(8080)
