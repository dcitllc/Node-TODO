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

router.post("/", (req, res) => {
  // INSERT INTO tablename(column1, column2) VALUES(column1_value, column2_value)
  // Then we are returning SELECT * FROM table WHERE id = inserted_row
  db.insert(req.body)
    .returning("*")
    .into("todo")
    .then(data => {
      res.send(data);
    });
});

router.put("/:id", (req, res) => {
  // UPDATEing the database/req.body based on id
  db("todo")
    .where({ id: req.params.id })
    .update(req.body)
    .returning("*")
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
