import { Company } from "../entities/Company.entities";
import {
  ICompanyRequest,
  ICompanyResponse,
  IUpadteCompany,
} from "../interfaces";
import AppDataSource from "../data-source";
import { AppError } from "../errors/apperror";
import { hash } from "bcrypt";

async function updateCompanyServices(
  {
    id,
    companyName,
    companyDescripition,
    logoCompany,
    email,
    password,
    telefone,
    city,
    bairro,
    tipe,
  }: IUpadteCompany,
  idParams: string
): Promise<Company> {
  const companyRepository = AppDataSource.getRepository(Company);
  const findCompany = await companyRepository.findOneBy({
    id,
  });
  if (!findCompany) {
    throw new AppError(403, "Company not found");
  }
  if (id) {
    throw new AppError(403, " id not to be changed ");
  }


  await companyRepository.update(idParams, {
    companyName: companyName ? companyName : findCompany!.companyName,
    email: email ? email : findCompany!.email,
    password: password ? await hash(password, 10) : findCompany!.password,
    companyDescripition: companyDescripition
      ? companyDescripition
      : findCompany!.companyDescripition,
    logoCompany: logoCompany ? logoCompany : findCompany!.logoCompany,
    telefone: telefone ? telefone : findCompany!.telefone,
    city: city ? city : findCompany!.city,
    bairro: bairro ? bairro : findCompany!.bairro,
    tipe: tipe ? tipe : findCompany!.tipe,
  });

  const company = await companyRepository.findOneBy({ id });

  return company!
}

export default updateCompanyServices;
