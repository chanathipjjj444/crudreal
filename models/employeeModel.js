 //Use this folder to react with db collection

 const mongoose = require('mongoose')

 //this mongoose.model will auto create collection with the plural of the first arguments
module.exports =  mongoose.model('Employee', {
    fullName : {type : String},
    position : {type : String},
    location : {type : String},
    salary : {type : Number},
  })