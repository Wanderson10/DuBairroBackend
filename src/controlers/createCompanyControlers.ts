import { AppError,handleError } from "../errors/apperror";
import { ICompanyRequest } from "../interfaces"

import  createCompanyServices from "../services/createCompanyService"
import {instanceToPlain} from "class-transformer"
import express, {Request, Response} from 'express';

async function createCompanyControler (req:Request,res:Response){

    try{
        const company : ICompanyRequest =req.body
        const createdCompany = await createCompanyServices(company)
        return res.status(201).json(instanceToPlain(createdCompany))
     
    }catch(error){
        if(error instanceof AppError){
            handleError(error,res)
            }
    }

}

export default createCompanyControler