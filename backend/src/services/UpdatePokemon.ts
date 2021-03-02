import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

class UpdatePokemonService {
  public async execute(updatedPokemon: Pokemon): Promise<Pokemon> {
    const pokemonRepository = getRepository(Pokemon);

    let pokemon = await pokemonRepository.findOne({
      id: updatedPokemon.id,
    });

    if (!pokemon) {
      throw new Error('Pokemon was not found');
    }

    pokemon = updatedPokemon;

    await pokemonRepository.save(pokemon);

    return pokemon;    
  }
}

export default UpdatePokemonService;