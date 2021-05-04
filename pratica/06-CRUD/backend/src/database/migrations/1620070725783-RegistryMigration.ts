import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class RegistryMigration1620070725783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'registry',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'budget',
                    type: 'decimal',
                },
                {
                    name: 'age',
                    type: 'int',
                },
                {
                    name: 'firstName',
                    type: 'varchar',
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                },
                {
                    name: 'company',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'phone',
                    type: 'varchar',
                },
                {
                    name: 'address',
                    type: 'varchar',
                },
                {
                    name: 'about',
                    type: 'varchar',
                },
                {
                    name: 'registered',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'latitude',
                    type: 'varchar',
                },
                {
                    name: 'longitude',
                    type: 'varchar',
                },
                {
                    name: 'channel',
                    type: 'varchar',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('registry');
    }

}
