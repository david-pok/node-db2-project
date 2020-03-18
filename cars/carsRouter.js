const express = require("express");

const db = require("../data/knexion.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

// router.get("")

router.post("/", (req, res) => {
  const carData = req.body;

  db("cars")
    .insert(carData, "id")
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
