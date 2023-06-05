import { Request, Response } from "express";
import { AppError, handleError } from "../errors/apperror";
import listCompanyByIdServices from "../services/listCompanyById";
import { instanceToPlain } from "class-transformer";

const listCompanyByIdControler = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const company = await listCompanyByIdServices(id);
    return res.status(200).json(instanceToPlain( company));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listCompanyByIdControler;
