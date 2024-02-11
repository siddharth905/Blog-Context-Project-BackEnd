const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 3000

//middleWare
app.use(express.json());

 const blog = require("./routes/blog")
 //mount
// app.use(blog);
app.use("/api/v1",blog);

//Connection with MongoDb Database
const connectWithDb=require("./config/database");
connectWithDb();

//start the server
app.listen(PORT,()=>{
    console.log(`App is started at port no ${PORT}`);
})

//Default
app.get("/",(req,res)=>{
    res.send(`<h1>This is HomePage</h1>`)
})


