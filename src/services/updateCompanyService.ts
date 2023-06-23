import { Company } from "../entities/Company.entities";
import {
  ICompanyRequest,
  ICompanyResponse,
  IUpadteCompany,
} from "../interfaces";
import AppDataSource from "../data-source";
import { AppError } from "../errors/apperror";
import { hash } from "bcrypt";
import { Request } from "express";

async function updateCompanyServices(
  {

    companyName,
    companyDescripition,
    logoCompany,
    email,
    password,
    phone,
    city,
    district,
    tipe,
  }: IUpadteCompany,
  idParams: string,
  req:Request
): Promise<Company> {

  const {id} = req.params
  console.log({meuID: id})
  const companyRepository = AppDataSource.getRepository(Company);
  const findCompany = await companyRepository.findOne({
    where:{id}
  });


  if (!findCompany) {
    throw new AppError(403, "Company not found");
  }
  
  console.log({primeiraBusca: findCompany})

  await companyRepository.update(id, {
    companyName: companyName ? companyName : findCompany!.companyName,
    email: email ? email : findCompany!.email,
    password: password ? await hash(password, 10) : findCompany!.password,
    companyDescripition: companyDescripition
      ? companyDescripition
      : findCompany!.companyDescripition,
    logoCompany: logoCompany ? logoCompany : findCompany!.logoCompany,
    phone: phone ? phone : findCompany!.phone,
    city: city ? city : findCompany!.city,
    district: district? district : findCompany!.district,
    tipe: tipe ? tipe : findCompany!.tipe,
  });
  console.log({AONDECHEGA: "Chegou!"})
  const company = await companyRepository.findOneBy({ id });


  return company!
}

export default updateCompanyServices;
