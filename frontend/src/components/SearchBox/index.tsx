import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const SearchBox: React.FC = () => {
  return (
    <Container>
      <FiSearch />
      <input type="text" />
    </Container>
  );
};

export default SearchBox;
