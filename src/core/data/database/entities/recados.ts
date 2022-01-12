
import {JoinColumn,ManyToOne,BaseEntity,Column, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class recados extends BaseEntity {

    @PrimaryColumn()
    uid?: string

    @Column()
    descricao?: string    

    @Column()
    detalhe?: string


    constructor(descricao:string, detalhe:string){
        super()
        this.uid = uuid()
        this.descricao = descricao;
        this.detalhe = detalhe
    }
}
