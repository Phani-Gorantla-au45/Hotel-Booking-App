import User from "../models/User.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser';

export const register = async (req,res)=> {
    
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email:req.body.email,
         password: hash,
      
    });
    try{
        const user = await newUser.save(newUser);
        res.status(200).json("User has been created")
    }
    catch(err){
        res.status(500).json(err)
}

}

export const login = async (req, res)=>{
    
    
    try{
        const user = await User.findOne({username:req.body.username})
        
        if(!user){
            res.status(404).json("Username doesnt exist")
        }
       const result = await bcrypt.compare(req.body.password,user.password)
       if(!result){
        res.status(500).json('Invalid Credentials')
       }
       const { password,isAdmin, ...otherdetails } = user._doc;

      const token = jwt.sign({
        data: {adminstatus:user.isAdmin,username:user.username}
      }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      console.log(token)

       res.cookie("Access_Token", token).status(200).json(otherdetails)

    }
    catch(err){
        res.status(500).json(err)
    }
}