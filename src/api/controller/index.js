const { Router } = require("express");
const router = new Router();

const connection = require("./../../../database");

router.get("/", (__, res) => {
  connection.query("SELECT * FROM data", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/countries/:name", (req, res) => {
  const { name } = req.params;
  connection.query(
    "SELECT * FROM data WHERE NAME=?",
    [name],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.get("/states/:name", (req, res) => {
  const { name } = req.params;
  connection.query(
    "SELECT * FROM data WHERE NAME_STATE=?",
    [name],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.get("/cities/:name", (req, res) => {
  const { name } = req.params;
  connection.query(
    "SELECT * FROM data WHERE NAME_CITY=?",
    [name],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
