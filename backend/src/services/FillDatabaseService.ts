import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

class FillDatabaseService {
  public async execute(data: Pokemon[]): Promise<Pokemon[]> {
    const pokemonRepository = getRepository(Pokemon);

    data.map(async pokemon => {
      const newPokemon = pokemonRepository.create(pokemon);
      await pokemonRepository.save(newPokemon);
    });

    return data;
  }
}

export default FillDatabaseService;
