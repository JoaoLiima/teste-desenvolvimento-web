import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';
import AppError from '../errors/AppError';

class UpdatePokemonService {
  public async execute(updatedPokemon: Pokemon): Promise<Pokemon> {
    const pokemonRepository = getRepository(Pokemon);

    const pokedexNumber = await pokemonRepository.findOne({
      pokedex_number: updatedPokemon.pokedex_number,
    });

    const pokemonName = await pokemonRepository.findOne({
      name: updatedPokemon.name,
    });

    let pokemon = await pokemonRepository.findOne({
      id: updatedPokemon.id,
    });

    if (pokedexNumber) {
      throw new AppError('This pokedex number already exists');
    }
    if (pokemonName) {
      throw new AppError('This pokemon name already exists');
    }

    if (!pokemon) {
      throw new AppError('Pokemon was not found');
    }

    pokemon = updatedPokemon;

    await pokemonRepository.save(pokemon);

    return pokemon;
  }
}

export default UpdatePokemonService;
