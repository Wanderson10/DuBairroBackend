import { Router } from "express";

import createCompanyControler from "../controlers/createCompanyControlers";
import softDeleteCompanyControler from "../controlers/deleteCompanyControler";
import listCompanyByIdControler from "../controlers/listCompanyByIdControler";
import listCompanyControler from "../controlers/listCompanyControlers";
import updateCompanyControler from "../controlers/updateCompanyControler";
import ensureAuthMidleware from "../middleware/enshureAuthTokenMidleware";
import verifyIdMiddleware from "../middleware/findUserIdMiddleware";

const companyRoutes = Router()

companyRoutes.post("",createCompanyControler)
companyRoutes.get ("",listCompanyControler)
companyRoutes.get("/:id",listCompanyByIdControler)
companyRoutes.patch("/:id",verifyIdMiddleware,ensureAuthMidleware,updateCompanyControler)
companyRoutes.delete("/:id",ensureAuthMidleware,softDeleteCompanyControler)


export default companyRoutes