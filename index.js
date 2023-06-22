const express = require('express');
const route = require("./Route/Route");
const { commonauth } = require('./Middleware/Auth');

const index = express()

index.use("/user",commonauth)

index.listen(7000,()=>{
    console.log("Server runned successfully");
})