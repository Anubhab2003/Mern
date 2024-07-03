// WE WILL CREATE A WEB SERVER
// const { createServer } = require('node:http');
import http from "http"
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>HI ANUBHAB</h1>');
//   res.end("");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// import {a} from "./mymodule.js"
// console.log(a)


//FOR COMMON JS
// const a=require("./mymodule2.js")

// console.log(a,__dirname)