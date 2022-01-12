import { Request, Response } from "express";
import Database from "../../../core/data/connection/Database";
import { recados } from "../../../core/data/database/entities/recados";

export default class RecadosController {
	
	public async store(req: Request, res: Response) {
		const { descricao,detalhe } = req.body;

		const recado: recados = await new recados(descricao,detalhe).save();

		console.log(recado);

		return res.status(200).send("usuario criada");
	}

	public async index(req: Request, res: Response) {
		const allRecados = await recados.find();

		return res.json(allRecados);
	}

	public async view(req: Request, res: Response) {
		const { uid } = req.params;

		const recado: recados | undefined = await recados.findOne(uid);

		return res.json(recado);
	}

	public async update(req: Request, res: Response) {
		const { uid } = req.params;

		const { descricao,detalhe } = req.body;
		const categoria = await recados.findOne(uid);

		if (descricao && detalhe) {
			const categoria = await new recados(descricao,detalhe).save();

			return res.status(200).send("recados atualizados");
		} else {
			return res.status(400).send("Parâmetros faltando");
		}
	}

	public async destroy(req: Request, res: Response) {
		const { uid } = req.params;

		const recado = await recados.findOne(uid);

		if(recado) {
			const result = await recados.remove(recado);
			
			console.log(result);

			return res.status(200).send("recado excluído com sucesso");
		} else {
			return res.status(404).send('Categoria não encontrada')
		}

		

		
	}
}
