const express = require('express');

const carRouter = require('./routers/carRouter.js');

const server = express();

server.use(express.json());

server.use("/api/cars", carRouter);

server.get("/", (req, res) => {
    res.send(`<h2>This is my Sanity Check!</h2>`);
  });

module.exports = server;

