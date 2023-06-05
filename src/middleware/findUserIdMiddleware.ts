import {Request, Response, NextFunction} from 'express'
import AppDataSource from '../data-source'
import { Company } from '../entities/Company.entities'

const  verifyIdMiddleware = async (req : Request , res : Response, next : NextFunction)=>{
     const {id} = req.params
     const useRepository = AppDataSource.getRepository(Company)


   
      const findUser = await useRepository.findOne({
       where: {id}
   })
    console.log({meuteste:findUser})
    
     if (!findUser){
        return res.status(404).json({
            message:  "invalid Id :("
        })
    }

    return next()
}

export default verifyIdMiddleware