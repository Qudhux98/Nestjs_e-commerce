import { MigrationInterface, QueryRunner } from "typeorm";

export class Ecom1733408140632 implements MigrationInterface {
    name = 'Ecom1733408140632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carts" ADD "name" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carts" DROP COLUMN "name"`);
    }

}
