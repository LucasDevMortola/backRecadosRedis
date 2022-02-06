import { serverError } from './../../../../core/presentation/helpers/http-helper';
import { RecadoEntity } from './../../../../core/infra/data/database/entities/recados';
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import controller from "../../../../core/presentation/contracts/controller";
import RecadosRepository from '../../infra/repositories/repository.recados';
import { ok } from '../../../../core/presentation/helpers/http-helper';
import { CacheRepository } from '../../../../core/infra/repositories/cache.repository';


export default class DeleteRecadosController implements controller {
    async handle(req: Request, res: Response): Promise<any> {
        try {

            const { uid } = req.params

            const repository = new RecadosRepository()
            const cache = new CacheRepository();
            
            const recadosEntity = await repository.deleteRecadosByUid(uid)
            cache.delete(`recado:${recadosEntity?.uid}`)

            cache.delete('recados')

            return ok(res,recadosEntity)
        } catch (error) {

            serverError(res,error)
        }
    }

}