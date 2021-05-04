import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class PictureMigration1620070741236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'picture',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'url',
                    type: 'varchar',
                },
                {
                    name: 'registryId',
                    type: 'varchar',
                },
            ],
            foreignKeys: [
                {
                    name: 'FKRegistry',
                    columnNames: ['registryId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'registry',
                    onDelete: 'cascade',
                    onUpdate: 'cascade',
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('picture');
    }

}
