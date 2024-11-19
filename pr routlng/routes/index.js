const experss = require("express")
const routes = experss.Router();
const indexCtl = require("../controller/indexCtl")

routes.get("/",indexCtl.homePage)
routes.post("/insert",indexCtl.addData)
routes.get("/edit",indexCtl.editPage)

module.exports= routes;