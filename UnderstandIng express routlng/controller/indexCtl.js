let admin = require("../model/dbSchema")

module.exports.homePage =( req,res) =>{
    res.render ("index")
}
module.exports.editPage = {req,res} => {
    res.render("edit")
}
module.exports.addData = async (req,res) =>{
    console.log(req,body);

    let data =await admin.create(req.body)
    data && res.redirect("/")
}