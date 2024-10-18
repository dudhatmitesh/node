const express = require("express");
const port = 55555
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
///app.use(express.urlencoded({ extended: true }));

// let users = [
    
//     {
//         id : 1,
//         name : "sanket",
//         subject : "full - stack"
//     },
//     {
//         id : 2,
//         name : "nayn",
//         subject : "node.js"
//     },
//     {
//         id : 3,
//         name : "yug",
//         subject :"html and css"
//     }
// ]


    app.get("/",(req,res)=>{
    res.render("index",{users});
})

app.post("/insert",(req,res)=>{
req.body.id = users.length + 1
console.log(req.body)
users.push(req.body);
res.redirect("back")
})
    
// app.get("/delete",(req,res)=>{
//     let data = users.filter((item)=>item.id != req.query.Id);
//     users = data
//     res.redirect("back")
// })

// app.get("/edit/:id",(req,res)=>{
//     let singleData = users.find((item)=>item.id == req.params.id );
//     singleData && res.render("edit",{singleData})
// })

// app.post("/update",(req,res)=>{
//     users.map((e,i)=>{
//         e.id == req.body.id ? users[i] = req.body : e })
//      res.redirect("/")
// })
app.listen(port,(err)=>{
    err ? console.log(err) :  console.log(`server Started at http://localhost:${port}`);
})