import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';
import AppError from '../errors/AppError';

interface Request {
  param: string;
}

class ListPokemonService {
  public async execute(): Promise<Pokemon[]> {
    const pokemonRepository = getRepository(Pokemon);
    const pokemons = await pokemonRepository.find();

    return pokemons;
  }

  public async searchPokemon({ param }: Request): Promise<Pokemon | Pokemon[]> {
    const pokemonRepository = getRepository(Pokemon);

    let pokemon;

    try {
      pokemon = await pokemonRepository.find({
        where: [
          {pokedex_number: parseInt(param)},
        ]
      });
    } catch {
      pokemon = await pokemonRepository.find({
        where: [
          {name: param},
          {type_1: param},
          {type_2: param},
        ]
      });
    }

    if (!pokemon) {
      throw new AppError('Pokemon not found');
    }

    return pokemon;
  }

  public async pagination(page: string): Promise<Pokemon[]> {
    const pokemonRepository = getRepository(Pokemon);
    const limitPerPage = 15;

    const pokemons = pokemonRepository.find({
      order: {pokedex_number: 'ASC'},
      skip: (limitPerPage * parseInt(page)) - limitPerPage,
      take: 15,
    });

    if(!pokemons) {
      throw new AppError('There is no more pokemons');
    }

    return pokemons;
  }
}

export default ListPokemonService;
