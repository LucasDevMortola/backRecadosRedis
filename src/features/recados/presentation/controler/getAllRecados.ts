import { serverError } from './../../../../core/presentation/helpers/http-helper';
import { Request, Response } from "express";
import RecadosRepository from "../../infra/repositories/repository.recados";
import controller from "../../../../core/presentation/contracts/controller";
import { Recado } from "../../domain/model/recados";
import { ok } from "../../../../core/presentation/helpers/http-helper";



export default class GetAllRecados implements controller {
	async handle(req: Request, res: Response) {

		try {
			const repository = new RecadosRepository();

			const recados: Array<Recado> = await repository.getAllRecados()

			if (recados.length == 0) return res.status(404)

			return ok(res,recados)

		}
		catch (error) {
			return serverError(res, error)
		}
	}

}