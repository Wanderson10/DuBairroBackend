import { Router } from "express";

import createCompanyControler from "../controlers/createCompanyControlers";
import softDeleteCompanyControler from "../controlers/deleteCompanyControler";
import listCompanyByIdControler from "../controlers/listCompanyByIdControler";
import listCompanyControler from "../controlers/listCompanyControlers";
import updateCompanyControler from "../controlers/updateCompanyControler";
import ensureAuthMidleware from "../middleware/enshureAuthTokenMidleware";

const companyRoutes = Router()

companyRoutes.post("",createCompanyControler)
companyRoutes.get ("",listCompanyControler)
companyRoutes.get("/:id",listCompanyByIdControler)
companyRoutes.patch("/:id",ensureAuthMidleware,updateCompanyControler)
companyRoutes.delete("/:id",ensureAuthMidleware,softDeleteCompanyControler)


export default companyRoutes