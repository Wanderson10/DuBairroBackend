import { Router } from "express";

import createCompanyControler from "../controlers/createCompanyControlers";
import softDeleteCompanyControler from "../controlers/deleteCompanyControler";
import listCompanyByIdControler from "../controlers/listCompanyByIdControler";
import listCompanyControler from "../controlers/listCompanyControlers";
import updateCompanyControler from "../controlers/updateCompanyControler";

const companyRoutes = Router()

companyRoutes.post("",createCompanyControler)
companyRoutes.get ("",listCompanyControler)
companyRoutes.get("/:id",listCompanyByIdControler)
companyRoutes.patch("/:id",updateCompanyControler)
companyRoutes.delete("/:id",softDeleteCompanyControler)


export default companyRoutes