const express = require("express")
const port = 2014   

const app = express();

const db = require("./config/db")

app.set("view engine","ejs")
app.use(express.urlencoded())
app.use("/",require("./routes/route"))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})

