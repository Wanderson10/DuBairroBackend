import deleteCompanyServices from "../services/deleteCompanyServices";
import { Request, Response } from "express";
import { AppError,handleError } from "../errors/apperror";


const softDeleteCompanyControler = async (req : Request,res : Response)=>{
    try {
      
        const id : string = req.params.id
        await deleteCompanyServices(id)
        return res.status(204).json({
      message: "CompanyDeleted"})
       }catch(error){
        if (error instanceof AppError){
            handleError(error,res)
            }
        }
}

export default softDeleteCompanyControler