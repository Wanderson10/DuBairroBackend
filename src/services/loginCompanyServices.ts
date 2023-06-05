import AppDataSource from "../data-source";
import { Company } from "../entities/Company.entities";
import { ICompanyLogin } from "../interfaces";
import { AppError } from "../errors/apperror";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";

async function loginCompanyServices({email,password} : ICompanyLogin,Meutoken:string) {
    const companyRepository = AppDataSource.getRepository(Company)
    const acount = await companyRepository.findOneBy({email})
    if(!email){
      throw new AppError (403,"field email are required! :(")
    }
    if(!password){
      throw new AppError (403,"field password are required! :(")
    }
    if(!acount){
        throw new AppError (403,"Wrong email or password! :(")
     }

     if (!bcrypt.compareSync(password, acount?.password)){
        throw new AppError (403,"Wrong email or password! :(")
     }
    const token = jwt.sign(
        {
        email :email,
        id : acount.id
       },
        String(process.env.JWT_SECRET),
        {expiresIn : '1d'}
     )

     return {token: token, acount : acount } 
     
    
}

export default loginCompanyServices