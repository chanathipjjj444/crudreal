require('dotenv').config()
const mongoose = require("mongoose");
const dbUri =
  `mongodb+srv://${process.env.ID}:${process.env.PASSWORD}@starwarquotes.abxuln4.mongodb.net/starwar?retryWrites=true&w=majority`;

//use this function to get rid of the warning
mongoose.set("strictQuery", false);


module.exports = () => {
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
