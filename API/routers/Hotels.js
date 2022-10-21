import express from "express";
import Hotel from "../models/Hotel.js";

const hotelRouter = express.Router();

//Create
hotelRouter.post("/", async (req,res)=>{
    console.log("Hotel")
const newHotel = new Hotel(req.body)

try{
const savedHotel = await newHotel.save()
res.status(200).json(savedHotel)
}
catch(err){
    res.status(500).json(err)
}
})

//Update Hotel
hotelRouter.put('/:id', async (req,res)=>{
    try{
        const updatedModel = await Hotel.findByIdAndUpdate(req.params.id,{$set :req.body})
        res.status(201).json(updatedModel)
    }
    catch(err){
        res.status(500).json(err)
    }
    
})

//Delete Hotel
hotelRouter.delete('/:id', async (req,res)=>{
    try{
        const hotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("the hotel has been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
    
})

//Get hotel
hotelRouter.get('/:id', async (req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }
    catch(err){
        res.status(500).json(err)
    }
    
})

//Get All Hotels

hotelRouter.get('/', async (req,res)=>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }
    catch(err){
        res.status(500).json(err)
    }
    
})



export default hotelRouter;