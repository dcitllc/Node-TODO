const express = require("express");
const apiRoute = require("./routes/api");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true // Allows for nested objects
  })
);

app.use("/api", apiRoute);

app.listen("3000");
