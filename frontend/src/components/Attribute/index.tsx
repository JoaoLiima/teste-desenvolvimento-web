import React from 'react';

import { Container } from './styles';

const Attribute: React.FC = () => {
  return (
    <Container>
      <p>Ataque</p>
      <div className="base">
        <div className="progress" />
      </div>
    </Container>
  );
};

export default Attribute;
