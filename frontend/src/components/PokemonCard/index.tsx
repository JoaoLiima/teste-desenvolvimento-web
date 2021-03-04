import React, { useEffect, useState } from 'react';

import { pokeApi } from '../../services/api';

import { Container } from './styles';

interface Request {
  name: string;
  pokedex_number: number;
}

interface PokemonImage {
  sprites: {
    front_default: string;
  };
}

const PokemonCard: React.FC<Request> = ({ name, pokedex_number }: Request) => {
  const [pokemon, setPokemon] = useState<PokemonImage | null>(null);

  useEffect(() => {
    pokeApi.get(`${name.toLowerCase()}`).then(response => {
      setPokemon(response.data);
    });
  }, [name]);

  return (
    <Container>
      <p>{`#${`00${pokedex_number}`.slice(-3)}`}</p>
      {pokemon && <img src={pokemon.sprites.front_default} alt="" />}
      <p>{name}</p>
    </Container>
  );
};

export default PokemonCard;
