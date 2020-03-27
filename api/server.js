const express = require("express");

const Dogs = require("../dogs/dogsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/api/dogs", (req, res) => {
  Dogs.get()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/api/dogs", (req, res) => {
    Dogs.insert(req.body)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

server.delete("/api/dogs/:id", (req, res) => {
    Dogs.remove(req.params.id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = server;
