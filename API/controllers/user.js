import User from "../models/User.js"


export const updateUser = async (req,res)=> {
    try{
        const updatedModel = await User.findByIdAndUpdate(req.params.id,{$set :req.body})
        res.status(201).json(updatedModel)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const deleteUser = async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("the hotel has been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const getUserDetails = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const getAllUsersDetails = async (req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err)
    }
}