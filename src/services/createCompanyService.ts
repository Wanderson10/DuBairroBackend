import { Company } from "../entities/Company.entities";
import { ICompanyRequest,ICompanyResponse } from "../interfaces";
import AppDataSource from "../data-source"
import { hash } from "bcrypt"
import { AppError } from "../errors/apperror";

async function createCompanyServices({companyName,email,password,telefone,logoCompany,companyDescripition,city,bairro,tipe} : ICompanyRequest) {

    const companyRepository =  AppDataSource.getRepository(Company)
  
    const hashedPassword = await hash(password,10)
 
     if(!companyName){
        throw new AppError (403,"companyName as Required")
     }

     if(!email){
        throw new AppError (403,"email as required")
     }
     if(!companyDescripition){
        throw new AppError (403,"companyDescription as required")
     }
     if(!password){
        throw new AppError (403,"Password as required")
     }

     if(!logoCompany){
        throw new AppError (403,"logoCompany as required")
     }
   const company = companyRepository.create({
        companyName,
        companyDescripition,
        logoCompany,
        email,
        password:hashedPassword,
        telefone,
        city,
        bairro,
        tipe
    })
    await companyRepository.save(company)

   return company
}
export default createCompanyServices