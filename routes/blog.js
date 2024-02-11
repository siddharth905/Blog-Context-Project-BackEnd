const express=require("express");
const router =express.Router();

const {createPost}=require("../controller/postController");

router.post("/posts/create",createPost);

module.exports=router;