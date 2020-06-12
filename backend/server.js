//requiring modules
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;

//creating middleware
app.use(cors());
app.use(express.json());


//Establishing connections

const uri = process.env.ATLAS_URI;
mongoose.connect(uri , {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open' , ()=> {
    console.log("Mongodb Atlas successfully connected .");
})

app.listen(port , ()=>{
    console.log(`Server Started........go to localhost: ${port}`);
});