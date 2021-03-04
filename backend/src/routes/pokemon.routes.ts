import { Router } from 'express';

import CreatePokemonService from '../services/CreatePokemonService';
import FillDatabaseService from '../services/FillDatabaseService';
import DeletePokemonService from '../services/DeletePokemonService';
import UpdatePokemonService from '../services/UpdatePokemonService';
import ListPokemonService from '../services/ListPokemonService';

const pokemonRouter = Router();

pokemonRouter.get('/', async (request, response) => {
  const listPokemon = new ListPokemonService();

  const pokemons = await listPokemon.execute();
  return response.status(200).json(pokemons);
});

pokemonRouter.get('/last', async (request, response) => {
  const listPokemon = new ListPokemonService();

  const pokemon = await listPokemon.getLastPokedexNumber();
  return response.status(200).json(pokemon);
});

pokemonRouter.get('/searchPokemon/:param', async (request, response) => {
  const { param } = request.params;

  const listPokemon = new ListPokemonService();

  const pokemon = await listPokemon.searchPokemon({ param });

  return response.status(200).json(pokemon)
});

pokemonRouter.get('/page/:page', async (request, response) => {
  const { page } = request.params;

  const listPokemon = new ListPokemonService();

  const pokemons = await listPokemon.pagination(page);

  return response.status(200).json(pokemons);
})

pokemonRouter.post('/createPokemon', async (request, response) => {
  const pokemon = request.body;

  const createPokemon = new CreatePokemonService();
  const newPokemon = await createPokemon.execute(pokemon);

  return response.status(201).json(newPokemon);
});

pokemonRouter.post('/fill', async (request, response) => {
  const pokemon = request.body;

  const fillDatabase = new FillDatabaseService();
  const newPokemon = await fillDatabase.execute(pokemon);

  return response.status(201).json(newPokemon);
});

pokemonRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

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
