import { Request,Response } from "express";

export default interface controller{

    handle(req:Request,res:Response):Promise<any>
    
}