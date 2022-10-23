import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res)=> {
    
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try{
const savedRoom = await newRoom.save()

        try{
await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms:savedRoom._id}})
res.status(200).json(savedRoom)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}