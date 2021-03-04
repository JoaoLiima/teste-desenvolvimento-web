import styled from 'styled-components';

export const Container = styled.div`
  background-color: #cfcfcf;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .search {
    max-width: 1075px;
    width: 100%;

    display: flex;
    align-items: flex-start;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1075px;
`;
