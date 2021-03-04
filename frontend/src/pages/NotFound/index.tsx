import React from 'react';

import { Container, Content } from './styles';

import Snorlax from '../../assets/icons/snorlax.svg';
import NavigationMenu from '../../components/NavigationMenu';

const NotFound: React.FC = () => {
  return (
    <>
      <Container>
        <NavigationMenu />
        <Content>
          <h1>Erro 404</h1>
          <p>Não tem nada aqui</p>
          <img src={Snorlax} alt="Page not found" />
        </Content>
      </Container>
    </>
  );
};

export default NotFound;
