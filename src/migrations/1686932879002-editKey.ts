import { MigrationInterface, QueryRunner } from "typeorm";

export class EditKey1686932879002 implements MigrationInterface {
    name = 'EditKey1686932879002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "phone" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "district" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "district"`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "bairro" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "telefone" character varying(50) NOT NULL`);
    }

}
