import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import { PrivateRoute } from '../../components/PrivateRoute';
import { Wrapper } from '../../components/Wrapper';
import { store } from '../../store';
// import { About } from '../About';
import { Home } from '../Home';
import { Login } from '../Login';
import { PageNotFound } from '../PageNotFound';
import { Task } from '../Task';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Wrapper>
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Route path="/about" component={About} /> */}
            <Route path="/login" component={Login} />
            <PrivateRoute path="/task" component={Task} />
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
};
