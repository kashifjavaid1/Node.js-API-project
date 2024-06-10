
const express = require('express');
const router=new express.Router();
const controllers=require ("../controllers/UserControllers")
// router
router.post("/users",controllers.userpost)
.get("/users",controllers.userget)
router.patch("/users/:id", controllers.userpatch); 
router.delete("/users/:id", controllers.userdelete); 

// 
route.get("/data".controllers.userget)
module.exports=router