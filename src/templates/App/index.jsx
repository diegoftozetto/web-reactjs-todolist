import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import { store } from '../../store';
import { About } from '../About';
import { Home } from '../Home';

export const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
