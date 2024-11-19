const mongoose = require("mongoose")

mongoose.connect("mongoose:/127.0.0.1",adminpanel)

const db = mongoose.connection

db.once(open,(err)=>{
    err? console.log(err) : console.log("db connected")

})
 
module.exports =db ;
