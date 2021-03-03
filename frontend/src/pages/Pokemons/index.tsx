import React, { useState, useEffect } from 'react';

import { backendApi } from '../../services/api';

import { Container, Items } from './styles';
import NavigationMenu from '../../components/NavigationMenu';
import SearchBox from '../../components/SearchBox';
import PokemonCard from '../../components/PokemonCard';

interface Pokemon {
  name: string;
  pokedex_number: number;
}

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([] as Pokemon[]);

  const url = window.location.href.split('/');
  const page = url[4];

  useEffect(() => {
    backendApi.get(`${page}`).then(response => {
      setPokemons(response.data);
    });
  }, [page]);

  return (
    <>
      <Container>
        <NavigationMenu />
        <div>
          <SearchBox />
        </div>
        <Items>
          {pokemons.map(pokemon => {
            return (
              <PokemonCard
                name={pokemon.name}
                pokedex_number={pokemon.pokedex_number}
              />
            );
          })}
        </Items>
      </Container>
    </>
  );
};

export default Pokemons;
