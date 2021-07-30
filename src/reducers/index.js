import { combineReducers } from 'redux';
import { reducer as ListItemReducers } from './listItem';
import { reducer as UserReducers } from './user';

export const reducers = combineReducers({
  ListItemReducers,
  UserReducers,
});
