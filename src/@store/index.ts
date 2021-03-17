import { combineReducers } from 'redux';
import { clientsReducer } from './clients/slice';
import { forecastReducer } from './forecast/slice';
import { currentWeatherReducer } from './current-weather/slice';
import { searchReducer } from './search/slice';
import { filterReducer } from './filter/slice';

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
  search: searchReducer,
  filter: filterReducer,
  clients: clientsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
