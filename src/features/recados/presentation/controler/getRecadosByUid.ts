import { serverError } from './../../../../core/presentation/helpers/http-helper';
import { Request, Response } from "express";
import controller from "../../../../core/presentation/contracts/controller";
import { ok } from "../../../../core/presentation/helpers/http-helper";
import RecadosRepository from "../../infra/repositories/repository.recados";
import { CacheRepository } from '../../../../core/infra/repositories/cache.repository';


export default class GetRecadosByUid implements controller {
    async handle(req: Request, res: Response): Promise<any> {

        try {

            const { uid } = req.params
            const repository = new RecadosRepository();
            const cache = new CacheRepository()

            const recadoEntity = await repository.GetRecadoByUid(uid)
            await cache.set(`recado:${recadoEntity?.uid}`, recadoEntity);
            
            ok(res, recadoEntity)

        } catch (error) {
            
            serverError(res, error)
        }


    }

}