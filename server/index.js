const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const app = express();

app.use(json());
app.use(cors());

app.get("/native", (req, res, next) => {
  console.log("Hit server");
  res.status(200).json("Testing");
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
