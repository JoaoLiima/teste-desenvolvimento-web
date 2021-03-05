import styled from 'styled-components';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: #cfcfcf;
`;

export const Container = styled.div`
  max-width: 1060px;
  margin: 25px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 120px;
      height: 50px;
      background-color: #ff1a1a;

      border: none;
      border-radius: 10px;

      font-family: 'Press Start 2P', cursive;
      color: black;

      transition: background-color 0.2s;

      :hover {
        background-color: #e51a1a;
      }
    }
  }
`;

export const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Press Start 2P', cursive;
    font-size: 30px;
  }

  img {
    width: 300px;
    height: auto;
  }
`;

export const Type = styled.div`
  max-width: 250px;
  display: flex;
  align-items: center;

  margin-top: 50px;

  img {
    width: 100px;
    height: auto;

    + img {
      margin-left: 25px;
    }
  }
`;
