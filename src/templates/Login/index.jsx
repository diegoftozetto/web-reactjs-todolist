import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormLogin } from '../../components/FormLogin';
import { selectors } from '../../selectors/user';

export const Login = () => {
  const isLogged = useSelector(selectors.getIsLogged);
  const history = useHistory();

  if (isLogged) {
    history.push('/task');
  }

  return <FormLogin />;
};
