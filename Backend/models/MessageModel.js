const mongoose = require ("mongoose");

const messageModel= mongoose.Schema({
    sender :{
        type : mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    receiver:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    chat:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"chat"
    },

},{
    timeStamp : true,
});

const message = mongoose.model("Message",messageModel);
module.exports=message;