const express= require("express");
const dotenv =require('dotenv');
const mongoose = require("mongoose");


const app= express();
dotenv.config();

app.get("/",(req,res)=>{
    res.send("API is running 123")
});

const connectDB= async()=>{
    const connect = await mongoose.connect(process.env.Mongo_URI);
    console.log("Server is connected to database!");
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("The server is running...")); 