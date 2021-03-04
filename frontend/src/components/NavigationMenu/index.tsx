import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import pokeball from '../../assets/icons/pokeball.svg';

const NavigationMenu: React.FC = () => {
  return (
    <Container>
      <Link to="../../pokemons/page/1">Explorar</Link>
      <Link to="/">
        <img src={pokeball} alt="Navegar para o menu" />
      </Link>
      <Link to="create">Criar</Link>
    </Container>
  );
};

export default NavigationMenu;
