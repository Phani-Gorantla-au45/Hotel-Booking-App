import express from "express";
import { createHotel, deleteHotel, getAllHotelDetails, getHotelDetails, updateHotel } from "../controllers/hotel.js";
import { createRoom } from "../controllers/room.js";
import Hotel from "../models/Hotel.js";
import verifyToken, { verifyAdmin } from "../utils/verifyToken.js";

const roomRouter = express.Router();

//Create Hotel
roomRouter.post("/:hotelId", createRoom)

// //Update Hotel
// hotelRouter.put('/:id', verifyAdmin, updateHotel)

// //Delete Hotel
// hotelRouter.delete('/:id',verifyAdmin, deleteHotel)

// //Get hotel
// hotelRouter.get('/:id', getHotelDetails)

// //Get All Hotels
// hotelRouter.get('/', getAllHotelDetails);



export default roomRouter;