const express=require('express');
const route=new express.Router();
const controllers=require('../controllers/UserControllers')
router.post("/users",controllers.userpost)