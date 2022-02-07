import { serverError } from './../../../../core/presentation/helpers/http-helper';
import { Request, Response } from "express";
import RecadosRepository from "../../infra/repositories/repository.recados";
import controller from "../../../../core/presentation/contracts/controller";
import { Recado } from "../../domain/model/recados";
import { ok } from "../../../../core/presentation/helpers/http-helper";
import { CacheRepository } from '../../../../core/infra/repositories/cache.repository';



export default class GetAllRecados implements controller {
	async handle(req: Request, res: Response) {

		try {
			//
			const cache = new CacheRepository();

			
			const recadosCache = await cache.get("recados");

			if (recadosCache) {
				return ok(
				  res,
				  (recadosCache as Recado[]).map((x) =>
					Object.assign({}, x, { _cache: true })
				  )
				);
			  }
			  const repository = new RecadosRepository();
			  const recados: Array<Recado> = await repository.getAllRecados()

			if (recados.length == 0) return res.status(404)
			await cache.set("recados", recados);

			return ok(res,recados)

		}
		catch (error) {
			console.log(error)
			return serverError(res, error)
		}
	}

}

