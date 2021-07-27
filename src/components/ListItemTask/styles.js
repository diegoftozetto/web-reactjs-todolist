import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;

  margin-bottom: 15px;
  padding: 15px;
  background-color: rgba(156, 156, 156, 0.651);
  box-shadow: 0px 0px 5px 5px rgba(56, 56, 56, 0.2);
`;

export const Content = styled.div`
  align-self: center;
  word-break: break-word;
`;

export const Options = styled.div`
  align-self: center;

  img {
    margin: 0 8px;
    cursor: pointer;
  }

  img:nth-child(1):hover {
    background: rgba(149, 195, 247, 0.548);
    border-radius: 50px;
  }

  img:nth-child(2):hover {
    background: rgba(247, 152, 149, 0.548);
    border-radius: 50px;
  }
`;
