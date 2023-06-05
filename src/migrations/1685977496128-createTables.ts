import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1685977496128 implements MigrationInterface {
    name = 'CreateTables1685977496128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" ALTER COLUMN "id" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
    }

}
