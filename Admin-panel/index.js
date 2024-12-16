const express = require("express")
const port = 2014   

const app = express();
const path = require("path");
const db = require("./config/db")

app.set("view engine","ejs")
app.use(express.urlencoded())
app.use("/",require("./routes/route"))
app.ste("/" ,require("./pubilc/matrix-admin-master/dist/css"))
ro

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})
