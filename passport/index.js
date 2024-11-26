const express =require("express")
const port = 5321

const app =express();

app.listen(port,(err)=>{
    err? console.log(err): console.log(`server started at http://localhost:${port}`)
})