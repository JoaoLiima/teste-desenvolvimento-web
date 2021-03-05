/* eslint-disable prettier/prettier */
import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  FiChevronRight,
  FiChevronLeft,
  FiSearch,
  FiArrowRight,
} from 'react-icons/fi';

import { backendApi } from '../../services/api';

import { Background, Container, Items, Form, Navigation } from './styles';
import NavigationMenu from '../../components/NavigationMenu';
import PokemonCard from '../../components/PokemonCard';

interface PageParams {
  page: string;
}

interface Pokemon {
  name: string;
  pokedex_number: number;
}

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([] as Pokemon[]);
  const [newPokemon, setNewPokemon] = useState('');
  const { params } = useRouteMatch<PageParams>();

  useEffect(() => {
    try {
      backendApi.get(`/page/${params.page}`).then(response => {
        setPokemons(response.data);
      });
    } catch (err) {
      alert(err.message);
    }
  }, [params.page]);

  async function handleSearchPokemon(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    try {
      event.preventDefault();
      const response = await backendApi.get(`/searchPokemon/${newPokemon}`);

      setPokemons(response.data);
      setNewPokemon('');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <NavigationMenu />
      <Background>
        <Container>
          <Form onSubmit={handleSearchPokemon}>
            <FiSearch size={20} />
            <input
              value={newPokemon}
              onChange={e => setNewPokemon(e.target.value)}
              placeholder="Digite aqui"
            />
            <button type="submit">
              <FiArrowRight size={20} />
            </button>
          </Form>
          <Items>
            {pokemons.length > 0
              ? pokemons.map(pokemon => {
                return (
                  <Link
                    key={pokemon.pokedex_number}
                    to={`../${pokemon.name}`}
                  >
                    <PokemonCard
                      name={pokemon.name}
                      pokedex_number={pokemon.pokedex_number}
                    />
                  </Link>
                );
              })
              : null}
          </Items>
          <Navigation>
            <Link to={`./${parseInt(params.page, 10) - 1}`}>
              <FiChevronLeft size={30} />
            </Link>
            <Link to={`./${parseInt(params.page, 10) + 1}`}>
              <FiChevronRight size={30} />
            </Link>
          </Navigation>
        </Container>
      </Background>
    </>
  );
};

export default Pokemons;
