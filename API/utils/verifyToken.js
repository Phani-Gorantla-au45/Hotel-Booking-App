import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser';


export const verifyToken = async (req, res)=> {
    const token = req.cookie;
    console.log(token)
    await jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if(err){
            return "Invalid Creds"
        }

        return "valid credentials"
      });
      
}