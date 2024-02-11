//import
const Post=require("../models/postModel");
const Like=require("../models/likeModel");

//like post

exports.likePost= async(req,res)=>{
   try{
    const {post,user}=req.body;
    const like=new Like({
        post,user,
    })
     const savedlike=await like.save();

     const updatedPost=await Post.findByIdAndUpdate(post,{$push: {likes: savedlike._id}},{new: true})
     .populate("likes").exec();

     res.json({
        post:updatedPost,
     });
   }
   catch(error) { 
    return res.status(400).json({
        error: "Error while Liking post",
    });
}
    

}