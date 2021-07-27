import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  height: 50px;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: rgb(0, 72, 139);
    text-shadow: 2px 2px 8px rgba(20, 49, 110, 0.418);
  }
`;

export const MenuBackground = styled.div`
  position: sticky;
  top: 0px;
  background: white;
  box-shadow: 0px 0px 5px 5px rgba(56, 56, 56, 0.2);

  &:active {
    font-weight: bold;
  }
`;
