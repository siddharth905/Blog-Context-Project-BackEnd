const express=require("express");
const router =express.Router();

const {createPost,getAllPosts}=require("../controller/postController");
const {likePost,unLikePost}=require("../controller/likeController");
const {createComment}=require("../controller/commentController");

router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unLikePost);
router.post("/comments/create",createComment);


module.exports=router;