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
  const zeros = () => {
    if (pokedex_number < 10) {
      return '00';
    }
    if (pokedex_number > 10 && pokedex_number < 100) {
      return '0';
    }
    return '';
  };

  useEffect(() => {
    pokeApi.get(`${name.toLowerCase()}`).then(response => {
      setPokemon(response.data);
    });
  }, [name]);

  return (
    <Container>
      <p>{`#${zeros()}${pokedex_number}`}</p>
      {pokemon && <img src={pokemon.sprites.front_default} alt="" />}
      <p>{name}</p>
    </Container>
  );
};

export default PokemonCard;
