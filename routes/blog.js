const express=require("express");
const router =express.Router();

const {createPost,getAllPosts}=require("../controller/postController");
const {likePost}=require("../controller/likeController");


router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);

module.exports=router;