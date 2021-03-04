import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';
import AppError from '../errors/AppError';

class DeletePokemonService {
  public async execute(id: string): Promise<void> {
    const pokemonRepository = getRepository(Pokemon);

    const pokemon = await pokemonRepository.findOne({id});

    if (!pokemon) throw new AppError('Pokemon not Found');

    await pokemonRepository.remove(pokemon);
  }
}

export default DeletePokemonService;
