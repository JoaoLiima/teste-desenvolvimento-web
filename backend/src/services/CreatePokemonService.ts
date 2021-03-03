import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';
import AppError from '../errors/AppError';

class CreatePokemonService {
  public async execute(pokemon: Pokemon): Promise<Pokemon> {
    const pokemonRepository = getRepository(Pokemon);

    const pokedexNumber = await pokemonRepository.findOne({
      pokedex_number: pokemon.pokedex_number,
    });

    const pokemonName = await pokemonRepository.findOne({
      name: pokemon.name,
    });

    if (pokedexNumber) {
      throw new AppError('This pokedex number already exists');
    }
    if (pokemonName) {
      throw new AppError('This pokemon name already exists');
    }

    const newPokemon = pokemonRepository.create(pokemon);

    await pokemonRepository.save(newPokemon);

    return newPokemon;
  }
}

export default CreatePokemonService;
