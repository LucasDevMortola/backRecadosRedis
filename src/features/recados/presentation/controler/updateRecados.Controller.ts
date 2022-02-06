import { serverError } from './../../../../core/presentation/helpers/http-helper';
import { Request, Response } from "express";

import controller from "../../../../core/presentation/contracts/controller";
import RecadosRepository from '../../infra/repositories/repository.recados';
import { ok } from '../../../../core/presentation/helpers/http-helper';
import { CacheRepository } from '../../../../core/infra/repositories/cache.repository';


export default class UpdateRecadosController implements controller{
  async  handle(req: Request, res: Response): Promise<any> {
        try {
            
            const { uid } = req.params;

            const repository = new RecadosRepository();
            const cache = new CacheRepository();

            const recado = await repository.updateRecados({ uid, ...req.body });

            if (!recado) return res.status(404).send('error')
      
            await cache.delete("recados");
            await cache.delete(`recado:${uid}`);

        ok(res,recado)

        } catch (error) {
            console.log(error)
            serverError(res, error)
        }
        
    }

}