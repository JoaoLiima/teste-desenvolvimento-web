import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 10px;

  height: 200px;
  width: 200px;
  background-color: white;

  font-family: 'Press Start 2P', cursive;
  color: black;
  font-size: 15px;

  cursor: pointer;

  p {
    margin: 10px 0;
  }

  img {
    height: 130px;
    width: auto;
  }
`;
