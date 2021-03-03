import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePokemons1614696692325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(
        new Table({
          name: 'pokemons',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'pokedex_number',
              type: 'integer',
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'img_name',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'generation',
              type: 'integer',
              isNullable: true,
              default: 99,
            },
            {
              name: 'evolution_stage',
              type: 'varchar',
              isNullable: true,
              default: "1",
            },
            {
              name: 'evolved',
              type: 'boolean',
              isNullable: true,
              default: true,
            },
            {
              name: 'family_id',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'cross_gen',
              type: 'boolean',
              isNullable: true,
              default: false,
            },
            {
              name: 'type_1',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'type_2',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'weather_1',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'weather_2',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'stat_total',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'attack',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'defense',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'stamina',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'legendary',
              type: 'boolean',
              isNullable: true,
            },
            {
              name: 'aquireable',
              type: 'integer',
              isNullable: true,
              default: 1,
            },
            {
              name: 'spawns',
              type: 'boolean',
              isNullable: true,
              default: true,
            },
            {
              name: 'regional',
              type: 'boolean',
              isNullable: true,
              default: false,
            },
            {
              name: 'raidable',
              type: 'integer',
              isNullable: true,
              default: 0,
            },
            {
              name: 'hatchable',
              type: 'integer',
              isNullable: true,
              default: 5,
            },
            {
              name: 'shiny',
              type: 'boolean',
              isNullable: true,
            },
            {
              name: 'nest',
              type: 'boolean',
              isNullable: true,
              default: false,
            },
            {
              name: 'new',
              type: 'boolean',
              isNullable: true,
              default: true,
            },
            {
              name: 'not_gettable',
              type: 'boolean',
              isNullable: true,
              default: false,
            },
            {
              name: 'future_evolve',
              type: 'boolean',
              isNullable: true,
              default: false,
            },
            {
              name: 'cp_40',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'cp_39',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
              isNullable: true,
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
              isNullable: true,
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pokemons');
    }

}
