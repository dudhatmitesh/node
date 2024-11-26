
const express = require("express");
const route = express.Router();
const indexCtl = require("../controller/indexCtl");
const passport = require("passport")
const multer = require("../middleware/multer")




route.get("/", indexCtl.SignUp)
route.post("/sendData", indexCtl.SignUpData)
route.get("/login", indexCtl.Login)
route.post("/loginData",
    passport.authenticate("local",{failureRedirect:"/"}),
    indexCtl.LoginData
)
route.get("/logout", indexCtl.LogOut)
route.get("/dashboard", passport.checkAuthentication, indexCtl.Dashbord)
route.get("/addadmin", passport.checkAuthentication, indexCtl.AddTask);
route.get("/viewadmin", passport.checkAuthentication, indexCtl.ViewTask);

module.exports = route;