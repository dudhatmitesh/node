const express = require("express")
const port = 1008

const app = express()

app.set("view engine","ejs")

app.use(express.urlencoded())

let data = [
    {
        id : 1,
        name : "mitesh",
        subject : "full-stack"
    },
    {
        id : 2,
        name : "sanket",
        subject : "C++"
    },
    {
        id : 3,
        name : "karan",
        subject : "java"
    }
]
app.get("/",(req,res)=>{
    res.render("index",{data})
})
log
app.post("/insert",(req,res)=>{
    console.log(req.body)
    res.redirect('/');
})
app.listen(port,(err)=>{
    err ? console.(err):
    console.log(`server started at http://localhost:${port}`)
})

