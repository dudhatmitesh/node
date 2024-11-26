const mongoose = require("mongoose")

 mongoose.connect("mongodb://127.0.0.1/Adminpanel2 project")

 const db = mongoose.connection

 db.once("open",(err)=>{
    err ? console.log(err) : console.log("Admin-Schema connected")
 })

 module.exports = db;
 