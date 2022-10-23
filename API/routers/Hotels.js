import express from "express";
import { createHotel, deleteHotel, getAllHotelDetails, getHotelDetails, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import verifyToken, { verifyAdmin } from "../utils/verifyToken.js";

const hotelRouter = express.Router();

//Create Hotel
hotelRouter.post("/", verifyAdmin, createHotel)

//Update Hotel
hotelRouter.put('/:id', verifyAdmin, updateHotel)

//Delete Hotel
hotelRouter.delete('/:id',verifyAdmin, deleteHotel)

//Get hotel
hotelRouter.get('/:id', getHotelDetails)

//Get All Hotels
hotelRouter.get('/', getAllHotelDetails);



export default hotelRouter;