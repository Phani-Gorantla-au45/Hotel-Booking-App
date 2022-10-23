import express from "express";
import { deleteUser, getAllUsersDetails, getUserDetails, updateUser } from "../controllers/user.js";
import User from "../models/User.js";
import verifyToken, { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const userRouter = express.Router();

//Update SUer
userRouter.put('/:id', verifyUser, updateUser)

//Delete User
userRouter.delete('/:id',verifyUser, deleteUser)

//Get User
userRouter.get('/:id',verifyUser, getUserDetails)

//Get All User
userRouter.get('/', verifyAdmin, getAllUsersDetails);



export default userRouter;