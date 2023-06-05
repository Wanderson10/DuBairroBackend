import AppDataSource from "../data-source";
import { Company } from "../entities/Company.entities";
import { AppError } from "../errors/apperror";

async function listCompanyByIdServices(id:string) {

    const companyRepository = AppDataSource.getRepository(Company)

    const findCompany = await companyRepository.findOne({
        where: {
          id,
        },
      });
      if (!findCompany) {
        throw new AppError( 404,"company not found");
      }
      
    return findCompany
    
}

export default listCompanyByIdServices