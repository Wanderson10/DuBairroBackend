import { Router } from "express";
import CompanyLoginControler from "../controlers/loginCompanyServices";
const routerLogin = Router()

routerLogin.post('',CompanyLoginControler)


export default routerLogin