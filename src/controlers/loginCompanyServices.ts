import { Request,Response } from "express"
import loginCompanyServices from "../services/loginCompanyServices"
import { ICompanyLogin } from "../interfaces"
import { AppError,handleError } from "../errors/apperror"
import { instanceToPlain } from "class-transformer"

let meuToken :string = ''
const CompanyLoginControler = async (req :Request ,res : Response) => {
    
   try{
        const {email,password} : ICompanyLogin= req.body
        const login = await loginCompanyServices({email,password},meuToken)
       
        return res.status(200).json(instanceToPlain(login))
    }
    catch(error){
        if (error instanceof AppError){
            handleError(error,res)
            }
        }
   
}
export {meuToken}

export default CompanyLoginControler