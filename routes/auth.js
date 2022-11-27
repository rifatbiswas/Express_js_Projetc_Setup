const express = require('express');
const router = express.Router();

const {greetings,info} = require("../contollers/auth")



router.get("/",greetings);
router.get("/info",info)


module.exports = router;