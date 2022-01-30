import { Response } from "express";


export const ok = (res:Response,data: any) =>{
    res.status(200).json(data)
}


export const serverError = (res:Response,data:any)=>{
    res.status(500).json(data)
}