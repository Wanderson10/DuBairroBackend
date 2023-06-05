import listCompanyServices from "../services/listCompanyServices";
import {instanceToPlain} from "class-transformer"
import  {Request, Response } from "express";
import { AppError,handleError } from "../errors/apperror";

async function listCompanyControler(req:Request,res:Response) {

    try{
        const company = await listCompanyServices()
        return res.status(200).json(instanceToPlain(company))
        }catch(error){
            if (error instanceof AppError){
                handleError(error,res)
                }
            }
        
        }
    
export default listCompanyControler