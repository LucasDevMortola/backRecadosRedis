import { serverError } from './../../../../core/presentation/helpers/http-helper';
import { RecadoEntity } from './../../../../core/infra/data/database/entities/recados';
import { Request, Response } from "express";

import controller from "../../../../core/presentation/contracts/controller";
import RecadosRepository from '../../infra/repositories/repository.recados';
import { ok } from '../../../../core/presentation/helpers/http-helper';


export default class UpdateRecadosController implements controller{
  async  handle(req: Request, res: Response): Promise<any> {
        try {
            
            const { uid } = req.params;

            const repository = new RecadosRepository();
      
            const recado = await repository.updateRecados({ uid, ...req.body });
      
            if (!recado) return res.status(404).send('error')
      

        ok(res,recado)

        } catch (error) {
            console.log(error)
            serverError(res, error)
        }
        
    }

}