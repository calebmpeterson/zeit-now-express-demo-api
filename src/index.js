const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.all("*", (req, res) =>
  res.send({
    url: req.url,
    path: req.path,
    params: req.params,
    query: req.query,
    body: req.body
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
