import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import { Wrapper } from '../../components/Wrapper';
import { store } from '../../store';
import { About } from '../About';
import { Home } from '../Home';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Wrapper>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
};
