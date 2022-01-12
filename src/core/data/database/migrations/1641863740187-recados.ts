import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class recados1641863740187 implements MigrationInterface {

    private tabelaRecado = new Table({
        name:"recados",

        columns: [
            {
                name: "uid",
                type: "uuid",
                isPrimary: true,
                isNullable: false
            },
            {
                name:"descricao",
                type: "varchar",
                isNullable:false
            },
            {
                name:"detalhe",
                type: "varchar",
                isNullable:false
            },

        ],
       
    })
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.tabelaRecado)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("recados")
    }

}
