//1st step import mongoose
const mongoose=require("mongoose");

//2nd step route handler
const commentSchema= new mongoose.Schema({
    post:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"post"  //reference to post model/table
    },
    user:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required:true
    }
});

//3rd step export model
module.exports=mongoose.model("Comment",commentSchema);