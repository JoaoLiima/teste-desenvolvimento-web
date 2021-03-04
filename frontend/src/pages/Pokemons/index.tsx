import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { backendApi } from '../../services/api';

import { Container, Items } from './styles';
import NavigationMenu from '../../components/NavigationMenu';
import SearchBox from '../../components/SearchBox';
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
  const { params } = useRouteMatch<PageParams>();

  useEffect(() => {
    backendApi.get(`/page/${params.page}`).then(response => {
      setPokemons(response.data);
    });
  }, [params.page]);

  return (
    <>
      <Container>
        <NavigationMenu />
        <div className="search">
          <SearchBox />
        </div>
        <Items>
          {pokemons.map(pokemon => {
            return (
              <Link key={pokemon.pokedex_number} to={`../${pokemon.name}`}>
                <PokemonCard
                  name={pokemon.name}
                  pokedex_number={pokemon.pokedex_number}
                />
              </Link>
            );
          })}
        </Items>
      </Container>
    </>
  );
};

export default Pokemons;
