export interface ICompanyRequest {
id:string,
companyName : string,
email:string,
password:string,
phone:string,
logoCompany:string,
companyDescripition:string,
city:string,
district:string,
tipe:string


}

export interface ICompanyResponse{
    id:string,
    companyName : string,
    email:string,
    phone:string,
    logoCompany:string,
    companyDescripition:string,
    city:string,
    district:string,
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
    phone:string,
    logoCompany:string,
    companyDescripition:string,
    city:string,
    district:string,
    tipe:string,
    password:string,

}