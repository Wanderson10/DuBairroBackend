import { Request, Response, NextFunction } from "express";
import   jwt  from "jsonwebtoken";

const ensureAuthMidleware = async (req :Request, res : Response , next : NextFunction)=>{

   
    
    let token  = req.headers.authorization

   if(!token){
    return res.status(401).json({message: 'invalid token! :('})
   }
   token = token.split(" ")[1]
 

  jwt.verify(token, process.env.JWT_SECRET as string,(error,decoded : any)=>{
  
   console.log(process.env.JWT_SECRET)
    if(error){
    
        return res.status(401).json({message:"invalid token"})
    }

    
    return  next()
  })
   
}

export default ensureAuthMidleware