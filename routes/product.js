const express = require('express');
const router = express.Router();

const { product } = require("../contollers/product")


router.get("/overview",product);



module.exports = router;