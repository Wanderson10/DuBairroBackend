import "reflect-metadata";
import "dotenv/config"
import express, { NextFunction,Request,Response } from "express";

import { AppError } from "./errors/apperror";
import companyRoutes from "./routes/companyRoutes";
import routerLogin from "./routes/loginRoute";
import { ZodError } from "zod";





const app = express()
app.use(express.json());
app.use("/company",companyRoutes)
app.use("/login",routerLogin)

app.use((err: Error,req :Request,res :Response, _ : NextFunction)=>{
    if(err instanceof AppError){
        return  res.status(err.statusCode).json({
            status :"error",
            message :err.message
        })
        
    }

    if (err instanceof ZodError){
        return res.status(400).json(err.flatten().fieldErrors )
    }
    console.log(err)
    return res.status(500).json({
        status:"error",
        message: "internal Server error"
    })
})



export default app;