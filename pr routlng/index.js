const experss = require("express");
const post = 1005;

const app =experss();
const db = require("./config/db")

app.set("view engine","ejs")
app.use(experss.urlencoded())

app.use("/", require("./routes/index"))


app.listen(post, (err) =>{
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})