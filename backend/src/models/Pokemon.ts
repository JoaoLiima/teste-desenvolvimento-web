import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pokemons')
class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pokedex_number: number;

  @Column()
  name: string;

  @Column()
  img_name: string;

  @Column()
  generation: number;

  @Column()
  evolution_stage: string;

  @Column()
  evolved: boolean;

  @Column()
  family_id: number;

  @Column()
  cross_gen: boolean;

  @Column()
  type_1: string;

  @Column()
  type_2: string;

  @Column()
  weather_1: string;

  @Column()
  weather_2: string;

  @Column()
  stat_total: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  stamina: number;

  @Column()
  legendary: boolean;

  @Column()
  aquireable: boolean;

  @Column()
  spawns: number;

  @Column()
  regional: number;

  @Column()
  raidable: number;

  @Column()
  hatchable: number;

  @Column()
  shiny: boolean;

  @Column()
  nest: number;

  @Column()
  new: boolean;

  @Column()
  not_gettable: boolean;

  @Column()
  future_evolve: boolean;

  @Column()
  cp_40: number;

  @Column()
  cp_39: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pokemon;