const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
require("dotenv").config();
const morgan = require('morgan');
const cors = require('cors');
const {readdiSynce} = require('fs');

// ========= Midileware =========
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(cors());

//==== MongoDB Connection =====

mongoose
    .connect(process.env.DATABASE)
    .then( () => console.log("DB Connectted"))
    .catch( (err) =>console.log("DB Error",err));


const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("App is running on port ${port}");
})