import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

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
      throw new Error('This pokedex number already exists');
    }
    if (pokemonName) {
      throw new Error('This pokemon name already exists');
    }

    const newPokemon = pokemonRepository.create(pokemon);

    await pokemonRepository.save(newPokemon);

    return newPokemon;
  }
}

export default CreatePokemonService;