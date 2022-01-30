import {ok, serverError } from './../../../../core/presentation/helpers/http-helper';
import { Request, Response } from "express";
import controller from "../../../../core/presentation/contracts/controller";
import { Recado } from "../../domain/model/recados";
import RecadosRepository from "../../infra/repositories/repository.recados";


export default class CreateRecadosController implements controller{
    async handle(req: Request, res: Response): Promise<any> {

        try {
            const {descricao, detalhe} = req.body

            const repository = new RecadosRepository();

            const recadosEntity = await repository.create(req.body)

            return ok(res,recadosEntity)
        } catch (error) {
            serverError(res,error)
        }
     
    }

}