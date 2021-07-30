import { NavLink } from 'react-router-dom';
import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../selectors/user';
import { logout } from '../../services/auth';

export const Menu = () => {
  const isLogged = useSelector(selectors.getIsLogged);
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Styled.MenuBackground>
      <Styled.FlexContainer>
        <NavLink to="/home">Home</NavLink>
        {!isLogged && (
          <>
            {/* <NavLink to="/about">Sobre</NavLink> */}
            <NavLink to="/login">Login</NavLink>
          </>
        )}
        {isLogged && (
          <>
            <NavLink to="/task">Tarefas</NavLink>
            <NavLink to="/login" onClick={onLogoutClick}>
              Logout
            </NavLink>
          </>
        )}
      </Styled.FlexContainer>
    </Styled.MenuBackground>
  );
};
