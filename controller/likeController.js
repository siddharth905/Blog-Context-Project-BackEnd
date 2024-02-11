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
    

};
exports.unLikePost= async(req,res)=>{
    try{
     const {post,like}=req.body;  //post and like is id type

    //find and delete the like collection me se
    const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

    //udpate the post collection
    const updatedPost = await Post.findByIdAndUpdate(post,
        {$pull: {likes: like} }, 
        {new: true});

 
      res.json({
         post:updatedPost,
      });
    }
    catch(error) { 
     return res.status(400).json({
         error: "Error while Liking post",
     });
 }
};