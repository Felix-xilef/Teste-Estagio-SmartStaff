import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ContactMigration1620070754329 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'contact',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'broker',
                    type: 'varchar',
                },
                {
                    name: 'date',
                    type: 'timestamp',
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
        await queryRunner.dropTable('contact');
    }

}
