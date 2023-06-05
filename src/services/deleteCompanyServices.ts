import AppDataSource from "../data-source";
import { Company } from "../entities/Company.entities";
import { AppError } from "../errors/apperror";

async function deleteCompanyServices (id:string){
    const companyRepository = AppDataSource.getRepository(Company)

    const findUser = await companyRepository.findOneBy({
        id,
    })

    if(!findUser){
        throw new AppError (403,"user not found")
    }
    await companyRepository.delete(
    id
       
    )
}

export default deleteCompanyServices