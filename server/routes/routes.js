const express = require("express");
const routes = express.Router(); 
 const controller = require("../controller/controller")
 routes.get("/",(req,res)=>{
    res.send("hello to all")
 })
 routes.post("/",controller.type1)

module.exports = routes;