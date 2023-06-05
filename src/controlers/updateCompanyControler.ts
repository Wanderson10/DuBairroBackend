import { Request,Response } from "express";
import updateCompanyServices from "../services/updateCompanyService";
import { AppError,handleError } from "../errors/apperror";
import { IUpadteCompany } from "../interfaces";

async function updateCompanyControler(req:Request,res:Response) {
    try {
        const {companyName,companyDescripition,email,telefone,city,logoCompany,bairro,id,password,tipe} :IUpadteCompany = req.body
        const idParams:string = req.params.id
        const updatedCompany = await updateCompanyServices({id,companyName,companyDescripition,logoCompany,email,password,telefone,city,bairro,tipe},idParams)
        return res.status(200).json({ message: "updated", user : updatedCompany,})
    }catch(error){
        if (error instanceof AppError){
            handleError(error,res)
            }
        }

    }
    export default updateCompanyControler
    
