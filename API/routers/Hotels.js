import express from "express";
import { createHotel, deleteHotel, getAllHotelDetails, getHotelDetails, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";

const hotelRouter = express.Router();

//Create Hotel
hotelRouter.post("/", createHotel)

//Update Hotel
hotelRouter.put('/:id', updateHotel)

//Delete Hotel
hotelRouter.delete('/:id', deleteHotel)

//Get hotel
hotelRouter.get('/:id', getHotelDetails)

//Get All Hotels
hotelRouter.get('/', getAllHotelDetails);



export default hotelRouter;