import styled from 'styled-components';

export const Background = styled.div`
  background-color: #cfcfcf;
  width: 100%;
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1075px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 250px;
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
    max-width: 160px;

    font-family: 'VT323', monospace;
    font-size: 23px;
  }

  button {
    width: 50px;
    height: 100%;
    background-color: #ff1a1a;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0 50px 50px 0;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1075px;
`;

export const Navigation = styled.div`
  margin: auto;

  svg {
    background-color: white;
    border-radius: 10px;
    color: black;
    margin: 0 10px;
  }
`;
