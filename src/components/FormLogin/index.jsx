// import { useState } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunks as loginThunks } from '../../thunks/login';
import { Button } from '../Button';
import { Title } from '../Title';
import * as Styled from './styles';

export const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handlerChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    dispatch(
      loginThunks.login({
        username: username.value,
        password: password.value,
      }),
    );
  };

  return (
    <>
      <Styled.Content>
        <Title name="Login" subName="Aqui você pode entrar e verificar suas tarefas..." />
        <Styled.Form onSubmit={formSubmitHandler}>
          <Styled.Input
            required
            maxLength="150"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handlerChangeUsername}
            placeholder="Informe o usuário..."
          />
          <Styled.Input
            required
            maxLength="150"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlerChangePassword}
            placeholder="Informe a senha..."
          />
          <Button type="submit">Entrar</Button>
        </Styled.Form>
      </Styled.Content>
    </>
  );
};
