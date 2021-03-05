import styled from 'styled-components';

import background from '../../assets/background.gif';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 10px 0;

  h1 {
    max-width: 800px;
    font-family: 'Press Start 2P', cursive;
    color: white;

    text-align: center;
    line-height: 40px;
  }

  img {
    height: 400px;
    width: auto;

    margin: 20px 0;
  }

  a {
    background-color: rgba(255, 255, 255, 0.8);
    width: 200px;
    height: 50px;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
    color: black;

    transition: background-color 0.2s;

    :hover {
      background-color: rgba(255, 255, 255, 1);
    }
  }
`;

export const Filler = styled.div`
  height: 400px;
  margin: 20px 0;
`;

export const Background = styled.div`
  height: 100%;
  background-image: url(${background});
  background-size: cover;
`;

export const Filter = styled.div`
  width: auto;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
