const express = require('express');
const http = require('http');
const app = express();
const characters = require('./characters');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");

  res.setHeader(
    //allows this server to accept packets with headers from different ports
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  //allows for the use of GET, POST, PATCH, DELETE, and OPTIONS methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/characters', characters);

const port = process.env.PORT || 3000;

app.set('port', port);

console.log("Server is up and running!");

const server = http.createServer(app);

server.listen(port);
