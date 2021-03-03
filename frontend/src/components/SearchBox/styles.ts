import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;
  background-color: white;
  border-radius: 50px;

  svg {
    margin: 0 10px;
  }

  input {
    height: 100%;
    border: none;
    background: transparent;
    max-width: 150px;

    font-family: 'VT323', monospace;
    font-size: 23px;
  }
`;
