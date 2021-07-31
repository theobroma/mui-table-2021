import { combineReducers } from 'redux';
import { clientsReducer } from './clients/slice';
import { filterReducer } from './filter/slice';

export const rootReducer = combineReducers({
  clients: clientsReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
