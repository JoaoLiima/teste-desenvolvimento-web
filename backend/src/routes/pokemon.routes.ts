import { Router } from 'express';

import CreatePokemonService from '../services/CreatePokemonService';
import DeletePokemonService from '../services/DeletePokemonService';
import UpdatePokemonService from '../services/UpdatePokemonService';
import ListPokemonService from '../services/ListPokemonService';

const pokemonRouter = Router();

pokemonRouter.get('/', async (request, response) => {
  const listPokemon = new ListPokemonService();

  const pokemons = await listPokemon.execute();
  return response.status(200).json(pokemons);
});

pokemonRouter.get('/searchPokemon', async (request, response) => {
  const { param } = request.body;

  const listPokemon = new ListPokemonService();

  const pokemon = await listPokemon.searchPokemon({ param });

  return response.status(200).json(pokemon)
})

pokemonRouter.post('/createPokemon', async (request, response) => {
  const pokemon = request.body;

  const createPokemon = new CreatePokemonService();
  const newPokemon = await createPokemon.execute(pokemon);

  return response.status(201).json(newPokemon);
});

pokemonRouter.delete('/', async (request, response) => {
  const id = request.body;

  const deletePokemon = new DeletePokemonService();
  await deletePokemon.execute(id);

  return response.status(200).json({ message: 'Success' });
})

pokemonRouter.put('/createPokemon', async (request, response) => {
  const pokemon = request.body;

  const updatePokemon = new UpdatePokemonService();

  const updatedPokemon = await updatePokemon.execute(pokemon);

  return response.status(200).json(updatedPokemon);
})

export default pokemonRouter;
