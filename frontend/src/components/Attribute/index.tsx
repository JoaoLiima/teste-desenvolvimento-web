import React from 'react';

import { Container } from './styles';

interface Stats {
  name: string;
  stats: number;
}

const Attribute: React.FC<Stats> = ({ stats, name }: Stats) => {
  return (
    <Container>
      <p>{name}</p>
      <div className="base">
        <div className="progress" style={{ width: `${stats}px` }} />
      </div>
    </Container>
  );
};

export default Attribute;
