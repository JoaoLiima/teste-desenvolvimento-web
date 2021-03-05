import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: inherit;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto;

  font-family: 'Press Start 2P', cursive;

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 25px;
  }

  img {
    width: 400px;
    height: auto;
  }
`;
