import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDescription1686585905644 implements MigrationInterface {
    name = 'FixDescription1686585905644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "companyDescripition"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "companyDescripition" character varying(2000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "companyDescripition"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "companyDescripition" character varying(50) NOT NULL`);
    }

}
