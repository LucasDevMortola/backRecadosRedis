
import {JoinColumn,ManyToOne,BaseEntity,Column, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({
    name: "recados"
})
export class RecadoEntity extends BaseEntity {

    @PrimaryColumn()
    uid: string

    @Column()
    descricao: string    

    @Column()
    detalhe: string

    @Column()
    num: number = 0


    constructor(descricao:string, detalhe:string){
        super()
        this.num = this.num + 1
        this.uid = uuid()
        this.descricao = descricao;
        this.detalhe = detalhe
    }
}
