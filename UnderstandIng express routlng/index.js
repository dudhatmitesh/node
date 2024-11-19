const express = require("express");
const port = 5234

const app = express();
const db =require("./config/db");
app.set("view engine", "esj")
app.use(express.urlencoded())

app.use("/",require("./routes/indxe"))

app.listen(port,(err) =>{
    err ? console.log(err) :console.log(`server started at http://localhost:${port}`)
})