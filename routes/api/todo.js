const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/", (req, res) => {
  // SELECT * FROM todo
  db.select()
    .from("todo")
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
