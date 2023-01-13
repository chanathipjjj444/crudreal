const express = require("express");
const bodyParser = require("body-parser");

//local imports
const connectDb = require("./db.js");
const employeeRoutes = require("./controllers/employeeController");
const {errorHandler} = require("./middlewares")

const app = express();

//middleware
app.use(bodyParser.json());
app.use("/api/employees", employeeRoutes); //ues the employee route on url /api/....
app.use(errorHandler)

connectDb() // when connected successfully log sth
  .then(() => {
    console.log("db connection succeedd.");
    app.listen(3000, () => console.log("server started at 3000."));
  })
  .catch((err) => console.log(err));
