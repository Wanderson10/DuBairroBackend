import { MigrationInterface, QueryRunner } from "typeorm";

export class Logo1686586108450 implements MigrationInterface {
    name = 'Logo1686586108450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "logoCompany"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "logoCompany" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "logoCompany"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "logoCompany" character varying(50) NOT NULL`);
    }

}
