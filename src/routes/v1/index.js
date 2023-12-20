const express = require("express");

const {InfoController} = require('../../controllers')
const router = express.Router();


// InfoController.info() - will execute the function and we dont want that  to  happen , we just want to place the function over there for better reading purposes then callback will be handled by express..
router.get("/info",InfoController.info);  


module.exports = router;