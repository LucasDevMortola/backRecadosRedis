import { Recado } from './../../domain/model/recados';
import { RecadoEntity } from './../../../../core/infra/data/database/entities/recados';
import { Request,Response} from "express";

export default class RecadosRepository{

    async create(data:any):Promise<Recado>{


        const recadoEntity = RecadoEntity.create({
            descricao: data.descricao,
            detalhe: data.detalhe
        })

        recadoEntity.save()
        return {
            uid: data.uid,
            descricao: data.descricao,
            detalhe: data.detalhe
        }
        
    }

    async getAllRecados(): Promise<Recado[]>{
    
        const recadosEntity = await RecadoEntity.find();
    
        return recadosEntity.map((x) =>
          this.mapperFromEntityToModel(x)
        );
      }
    async deleteRecadosByUid(uid:string): Promise<Recado | undefined>{
        
        const recadosEntity =await RecadoEntity.findOne()

        if(!recadosEntity) return undefined

       await recadosEntity.remove()

       return this.mapperFromEntityToModel(recadosEntity)

    }    

    async updateRecados(data:any): Promise<Recado | undefined>{

        const recadotEntity = await RecadoEntity.findOne(data.uid);

        if (!recadotEntity) return undefined;
    
        const recadoUpdated = RecadoEntity.create({
          descricao: data.descricao,
          detalhe: data.detalhe
        });
    
        await recadoUpdated.save();
    
        return this.mapperFromEntityToModel(recadoUpdated);
    }
    
    private mapperFromEntityToModel(entity: RecadoEntity): Recado {
        return {
          uid: entity.uid,
          descricao: entity.descricao,
          detalhe: entity.detalhe,
        };
    }


}