import { NavLink } from 'react-router-dom';
import * as Styled from './styles';

export const Menu = () => {
  return (
    <Styled.MenuBackground>
      <Styled.FlexContainer>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </Styled.FlexContainer>
    </Styled.MenuBackground>
  );
};
