import React from 'react';

import NavigationMenu from '../../components/NavigationMenu';
import { Container, Pokemon, Type } from './styles';
import Rock from '../../assets/types/rock.png';

import Attribute from '../../components/Attribute';

const Details: React.FC = () => {
  return (
    <>
      <NavigationMenu />
      <Container>
        <div>
          <Attribute />
          <Attribute />
          <Attribute />
        </div>
        <Pokemon>
          <p>#006</p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            alt="Charizard"
          />
          <p>Charizard</p>
          <Type>
            <img src={Rock} alt="" />
            <img src={Rock} alt="" />
          </Type>
        </Pokemon>
        <div className="button">
          <button type="button">Editar</button>
        </div>
      </Container>
    </>
  );
};

export default Details;
