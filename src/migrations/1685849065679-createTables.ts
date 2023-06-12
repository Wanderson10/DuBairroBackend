import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685849065679 implements MigrationInterface {
    name = 'CreateTables1685849065679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("id" uuid NOT NULL, "companyName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "telefone" character varying NOT NULL, "logoCompany" character varying NOT NULL, "companyDescripition" character varying NOT NULL, "city" character varying NOT NULL, "bairro" character varying NOT NULL, "tipe" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
