const express= require("express");
const dotenv =require('dotenv');
const mongoose = require("mongoose");
const userRoutes= require('./Routes/userRoutes');


const app= express();
dotenv.config();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is running 123")
});

app.use("/user",userRoutes);

const connectDB= async()=>{
    try{
        const connect = await mongoose.connect(process.env.Mongo_URI);
        console.log("Server is connected to database!");
    }
    catch(err){
        console.log("Server is NOT connected!", err.message);
    }  
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("The server is running..."));  