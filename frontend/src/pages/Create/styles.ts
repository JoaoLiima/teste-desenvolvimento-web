import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto;

  max-width: 1075px;

  .filler {
    width: 100%;
  }

  button {
    margin: auto;
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 10px;

    font-family: 'VT323', monospace;
    font-size: 20px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
  }
`;
