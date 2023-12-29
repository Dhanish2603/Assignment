const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller");
 
 routes.post("/update",controller.updateNum)
routes.post("/addNum", controller.addNum);
routes.get("/", (req, res) => {
  res.send("hello welcome to  feed");
});

routes.get("/showNum", controller.showNum);
  
 
module.exports = routes;
