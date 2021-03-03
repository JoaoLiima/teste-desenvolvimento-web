import React from 'react';
import { Container } from './styles';

import pokeball from '../../assets/icons/pokeball.svg';

const NavigationMenu: React.FC = () => {
  return (
    <Container>
      <a href="pokemons/1">Explorar</a>
      <a href="/">
        <img src={pokeball} alt="Navegar para o menu" />
      </a>
      <a href="criar">Criar</a>
    </Container>
  );
};

export default NavigationMenu;
