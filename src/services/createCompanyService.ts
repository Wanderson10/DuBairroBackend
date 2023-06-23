import { Company } from "../entities/Company.entities";
import { ICompanyRequest,ICompanyResponse } from "../interfaces";
import AppDataSource from "../data-source"
import { hash } from "bcrypt"
import { AppError } from "../errors/apperror";

async function createCompanyServices({companyName,email,password,phone,logoCompany,companyDescripition,city,district,tipe} : ICompanyRequest) : Promise<Company>{

    const companyRepository =  AppDataSource.getRepository(Company)
    
    const hashedPassword = await hash(password,10)
  
    

    
   const company = companyRepository.create({
        companyName,
        companyDescripition,
        logoCompany,
        email,
        password:hashedPassword,
        phone,
        city,
        district,
        tipe
    })
    await companyRepository.save(company)

   return company
}
export default createCompanyServices