import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685977323875 implements MigrationInterface {
    name = 'CreateTables1685977323875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" ALTER COLUMN "id" DROP DEFAULT`);
    }

}
