const { login, register, aboutus, contactus } = require("../Controller/Api")
const { Specificauth } = require("../Middleware/Auth")


const route = require("express").Router()

route.get("/login",login)
route.get("/register",register)
route.get("/aboutus",Specificauth,aboutus)
route.get("/contactus",Specificauth,contactus)