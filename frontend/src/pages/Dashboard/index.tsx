/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { pokeApi } from '../../services/api';

import NavigationMenu from '../../components/NavigationMenu';
import { Container, Filler, Background, Filter } from './styles';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const Dashboard: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    try {
      const pokedexNumber = Math.floor(Math.random() * 822);
      pokeApi.get(`${pokedexNumber}`).then(response => {
        setPokemon(response.data);
      });
    } catch (err) {
      alert(err.message)
    }

  }, []);

  return (
    <>
      <Background>
        <Filter>
          <NavigationMenu />
          <Container>
            <h1>Explore pokemons no Pokemon Explorer</h1>
            {pokemon ? (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            ) : <Filler />
            }
            <a href="pokemons/page/1">Explorar</a>
          </Container>
        </Filter>
      </Background>
    </>
  );
};

export default Dashboard;
