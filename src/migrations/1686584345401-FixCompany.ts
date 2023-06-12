import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCompany1686584345401 implements MigrationInterface {
    name = 'FixCompany1686584345401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "companyName"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "companyName" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" ADD CONSTRAINT "UQ_a337225c40c58bb274ebe884e2f" UNIQUE ("companyName")`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "logoCompany"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "logoCompany" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "companyDescripition"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "companyDescripition" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "city" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "companyDescripition"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "companyDescripition" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "logoCompany"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "logoCompany" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" DROP CONSTRAINT "UQ_a337225c40c58bb274ebe884e2f"`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "companyName"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "companyName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" ALTER COLUMN "id" DROP DEFAULT`);
    }

}
