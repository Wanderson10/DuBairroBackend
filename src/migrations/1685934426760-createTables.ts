import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685934426760 implements MigrationInterface {
    name = 'CreateTables1685934426760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "company" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "email" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ADD CONSTRAINT "UQ_b0fc567cf51b1cf717a9e8046a1" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "password" character varying(140) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "telefone" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "bairro" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "tipe"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "tipe" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "tipe"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "tipe" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "bairro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "telefone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" DROP CONSTRAINT "UQ_b0fc567cf51b1cf717a9e8046a1"`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "createdAt"`);
    }

}
