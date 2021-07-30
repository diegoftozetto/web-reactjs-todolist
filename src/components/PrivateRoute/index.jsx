import P from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectors } from '../../selectors/user';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector(selectors.getIsLogged);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: P.func.isRequired,
  location: P.object,
};
