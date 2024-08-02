const express=require('express');

const UserModel = require('../models/userModel');

const expressAsyncHandler= require('express-async-handler');
const generateToken = require('../Config/generateToken');

const loginController = expressAsyncHandler(async(req,res)=>{

    const {name,password}=req.body;

    const user = await UserModel.findOne({name});
    console.log("fetched user Data", user);
    console.log(await user.matchPassword(password));

    if(user && (await user.matchPassword(password))){
        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        });
    }
    else{
        throw new Error ("Invalid username or password.")
    }
});


const registerController = expressAsyncHandler(async (req,res)=>{
    const {name,email,password}=req.body;

    //If all the fields are left blank

    if(!name || !email || !password){
        res.send(400);
        throw Error("All necessary input fields have not been filled!");
    }

    //If the user already exist

    const userExist = await UserModel.findOne({email});

    if(userExist){
        throw new Error("User already exists!");
    }

    //If the username is already taken

    const userNameExist = await UserModel.findOne   ({name});

    if(userNameExist){
        throw new Error("Username is already taken!");
    }

    //Create an entry in database

    const user = await UserModel.create({name,email,password});

    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error("Registration Error");
    }
});

const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const users = await UserModel.find(keyword).find({
      _id: { $ne: req.user._id },
    });
    res.send(users);
  });
  
  module.exports = {
    loginController,
    registerController,
    fetchAllUsersController,
  };