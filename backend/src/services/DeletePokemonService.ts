import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

interface Request {
  id: string;
}

class DeletePokemonService {
  public async execute({ id }: Request): Promise<void> {
    const pokemonRepository = getRepository(Pokemon);

    const pokemon = await pokemonRepository.findOne(id);

    if (!pokemon) throw new Error('Pokemon not Found');

    await pokemonRepository.remove(pokemon);
  }
}

export default DeletePokemonService;