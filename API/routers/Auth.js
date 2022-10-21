import express from "express";

let authRouter = express.Router();

authRouter.get('/', (req,res)=> {
    console.log("here")
    res.send("Hello World")
})


export default authRouter;
