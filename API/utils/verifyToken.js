import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser';


export const verifyToken = async (req, res,nxt)=> {
    console.log("In verify token")
    const token = req.cookies.Access_Token;
    console.log(token)
    if(token === undefined){
        res.status(404).json("token doesn't exist")
       return;
    }
    await jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if(err){
            res.status(500).json("Invalid creds")
           nxt();
        }
        req.user = decoded;
        nxt();
      });
      
}


export const verifyUser = (req,res,nxt)=>{
    verifyToken(req,res,nxt,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            nxt()
        }
        else{
            res.status(500).json("Not authorised")
        }
    })
}

export const verifyAdmin = (req,res,nxt)=>{
    console.log("Admin post")
    verifyToken(req,res,nxt, ()=>{
        if(req.user.isAdmin){
            nxt()
        }
        else{
            res.status(500).json("Not authorised")
        }
    })
}

export default verifyToken