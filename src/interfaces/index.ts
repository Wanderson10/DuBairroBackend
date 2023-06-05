export interface ICompanyRequest {
id:string,
companyName : string,
email:string,
password:string,
telefone:string,
logoCompany:string,
companyDescripition:string,
city:string,
bairro:string,
tipe:string


}

export interface ICompanyResponse{
    id:string,
    companyName : string,
    email:string,
    telefone:string,
    logoCompany:string,
    companyDescripition:string,
    city:string,
    bairro:string,
    tipe:string
    
}

export interface ICompanyLogin{
    email:string,
    password:string,
}

export interface IUpadteCompany {

    id:string,
    companyName : string,
    email:string,
    telefone:string,
    logoCompany:string,
    companyDescripition:string,
    city:string,
    bairro:string,
    tipe:string,
    password:string,

}