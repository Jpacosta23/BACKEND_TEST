const { Router } = require("express");
const router = new Router();

const connection = require("./../../../database");

router.get("/", (__, res) => {
  connection.query("SELECT * FROM test", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/countries/:name", (__, res) => {
  if (infoCities) {
    res.json(infoCities);
  } else {
    res.status(404);
  }
});

module.exports = router;
