import { Router } from 'express';

import CreatePokemonService from '../services/CreatePokemonService';
import DeletePokemonService from '../services/DeletePokemonService';
import UpdatePokemonService from '../services/UpdatePokemon';

const pokemonRouter = Router();

pokemonRouter.post('/', async (request, response) => {
  const pokemon = request.body;

  const createPokemon = new CreatePokemonService();
  const newPokemon = await createPokemon.execute(pokemon);

  return response.status(201).json(newPokemon);
});

pokemonRouter.delete('/', async (request, response) => {
  const { id } = request.params;

  const deletePokemon = new DeletePokemonService();
  await deletePokemon.execute({ id });

  return response.status(201).json({ message: 'Success' });
})

pokemonRouter.put('/', async (request, response) => {
  const pokemon = request.body;

  const updatePokemon = new UpdatePokemonService();

  const updatedPokemon = await updatePokemon.execute(pokemon);

  return response.status(201).json(updatedPokemon);
})

export default pokemonRouter;