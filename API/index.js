import express from 'express';
import dotenv from 'dotenv';


import mongoose from 'mongoose';
// import authRoute from '../API/routers/Auth/route';
import authRoute from "./routers/Auth.js"
import hotelRouter from './routers/Hotels.js';
import cookieParser from 'cookie-parser';
import userRouter from './routers/Users.js';
import roomRouter from './routers/Rooms.js';
const app = express()
dotenv.config();

app.use(express.json());
app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/hotel', hotelRouter)
app.use('/api/user', userRouter)
app.use('/api/room', roomRouter)


let connect = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected")
      } catch (error) {

        handleError(error);
      }
}

  

app.listen(8000, ()=>{
    connect();
    console.log("server connected")
})