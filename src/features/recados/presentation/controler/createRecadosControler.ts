import {ok, serverError } from './../../../../core/presentation/helpers/http-helper';
import { Request, Response } from "express";
import controller from "../../../../core/presentation/contracts/controller";
import { Recado } from "../../domain/model/recados";
import RecadosRepository from "../../infra/repositories/repository.recados";
import { CacheRepository } from '../../../../core/infra/repositories/cache.repository';


export default class CreateRecadosController implements controller{
    async handle(req: Request, res: Response): Promise<any> {

        try {
            const {descricao, detalhe} = req.body

            const repository = new RecadosRepository();
            //const cache = new CacheRepository ()

            const recadosEntity = await repository.create(req.body)
            // const result = await cache.set(`recado:${recadosEntity.uid}`, recadosEntity);

            // if (!result) console.log("NÃO SALVOU NO CACHE");

           // await cache.delete("recados");

            return ok(res,recadosEntity)

        } catch (error) {
            serverError(res,error)
        }
     
    }

}