const express = require('express');
const router = express.Router();





router.get("/",async(req,res)=>{
    res.send('<h1>Hollow Express JS</h1>')
})


module.exports = router;