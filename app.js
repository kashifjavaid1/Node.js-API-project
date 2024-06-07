require("dotenv").config();
const express = require("express");
const app=express()
// DB CONNECT
require("./db/Connection")
const cors=require("cors");

// router import
const router = require("./routes/router")
const PORT=5004;

// error hide port number
app.use(cors());
//  json data get
app.use(express.json())
app.use(router)

//   server starts
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})