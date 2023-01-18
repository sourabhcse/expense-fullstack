const express = require("express");
const bodyParser = require("body-parser");
const expenseRoute = require("./routes/expenseRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", expenseRoute);

app.listen(3000, () => {
  console.log("Listen on 3000 ");
});

module.exports = app;
