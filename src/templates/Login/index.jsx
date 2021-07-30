import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { FormLogin } from '../../components/FormLogin';
import { selectors } from '../../selectors/user';

export const Login = () => {
  const isLogged = useSelector(selectors.getIsLogged);
  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      history.push('/task');
    }
  }, [history, isLogged]);

  return <FormLogin />;
};
