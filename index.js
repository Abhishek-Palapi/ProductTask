const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

const models = require("./models");
app.use(cors());
app.use(bodyParser.json());
app.use("/", models);
const port = 3001;
app.listen(port, function() {
  console.log("Server has started on", port);
});
