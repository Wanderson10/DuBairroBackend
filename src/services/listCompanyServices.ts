import AppDataSource from "../data-source";
import { Company } from "../entities/Company.entities";


async function listCompanyServices() {
    const companyRepository = AppDataSource.getRepository(Company)

    const companys = companyRepository.find()

    return companys
    
}

export default listCompanyServices