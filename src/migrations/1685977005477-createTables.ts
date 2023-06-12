import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685977005477 implements MigrationInterface {
    name = 'CreateTables1685977005477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companys" ("id" uuid NOT NULL, "companyName" character varying NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(140) NOT NULL, "telefone" character varying(50) NOT NULL, "logoCompany" character varying NOT NULL, "companyDescripition" character varying NOT NULL, "city" character varying NOT NULL, "bairro" character varying(120) NOT NULL, "tipe" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6bf4662faa4993f5326257cda41" UNIQUE ("email"), CONSTRAINT "PK_a4f1caae0b4e0af6fe3315cec31" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companys"`);
    }

}
