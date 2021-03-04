/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { pokeApi, backendApi } from '../../services/api';

import NavigationMenu from '../../components/NavigationMenu';
import { Background, Container, Pokemon, Type } from './styles';
import Images from './images';

import Attribute from '../../components/Attribute';

interface PokemonParams {
  pokemon: string;
}

interface Pokemon {
  pokedex_number: number;
  name: string;
  type_1: string;
  type_2: string | null;
  attack: number;
  defense: number;
  stamina: number;
}

interface PokemonImage {
  sprites: {
    front_default: string;
  };
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<PokemonParams>();
  const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);
  const [image, setImage] = useState<PokemonImage | null>(null);

  useEffect(() => {
    backendApi.get(`/searchPokemon/${params.pokemon}`).then(response => {
      setPokemon(response.data);
    });
    pokeApi.get(`/${params.pokemon.toLowerCase()}`).then(response => {
      setImage(response.data);
    });
  }, [params.pokemon]);

  function typeImage(type: string) {
    switch (type) {
      case 'bug':
        return <img src={Images.bug} alt="Pokemon type" />;
      case 'dark':
        return <img src={Images.dark} alt="Pokemon type" />;
      case 'dragon':
        return <img src={Images.dragon} alt="Pokemon type" />;
      case 'electric':
        return <img src={Images.electric} alt="Pokemon type" />;
      case 'fairy':
        return <img src={Images.fairy} alt="Pokemon type" />;
      case 'fighting':
        return <img src={Images.fighting} alt="Pokemon type" />;
      case 'fire':
        return <img src={Images.fire} alt="Pokemon type" />;
      case 'flying':
        return <img src={Images.flying} alt="Pokemon type" />;
      case 'ghost':
        return <img src={Images.ghost} alt="Pokemon type" />;
      case 'grass':
        return <img src={Images.grass} alt="Pokemon type" />;
      case 'ground':
        return <img src={Images.ground} alt="Pokemon type" />;
      case 'ice':
        return <img src={Images.ice} alt="Pokemon type" />;
      case 'normal':
        return <img src={Images.normal} alt="Pokemon type" />;
      case 'poison':
        return <img src={Images.poison} alt="Pokemon type" />;
      case 'psychic':
        return <img src={Images.psychic} alt="Pokemon type" />;
      case 'rock':
        return <img src={Images.rock} alt="Pokemon type" />;
      case 'steel':
        return <img src={Images.steel} alt="Pokemon type" />;
      case 'water':
        return <img src={Images.water} alt="Pokemon type" />;
      default:
        return <p>{type}</p>;
    }
  }

  return (
    <>
      <Background>
        <NavigationMenu />
        {pokemon ? (
          <Container>
            <div>
              <Attribute stats={(pokemon[0].attack * 200) / 414} name="Ataque" />
              <Attribute stats={(pokemon[0].defense * 200) / 396} name="Defesa" />
              <Attribute stats={(pokemon[0].stamina * 200) / 510} name="Estâmina" />
            </div>
            <Pokemon>
              <p>{`#${(`00${pokemon[0].pokedex_number}`).slice(-3)}`}</p>
              {image ? (
                <img src={image.sprites.front_default} alt={pokemon[0].name} />
              ) : (
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
                    alt={pokemon[0].name}
                  />
                )}
              <p>{pokemon[0].name}</p>
              <Type>
                {typeImage(pokemon[0].type_1)}
                {pokemon[0].type_2 ? typeImage(pokemon[0].type_2) : null}
              </Type>
            </Pokemon>
            <div className="button">
              <button type="button">Editar</button>
            </div>
          </Container>
        ) : null}
      </Background>
    </>
  );
};

export default Details;
