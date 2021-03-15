import { combineReducers } from 'redux';
import { forecastReducer } from './forecast/slice';
import { currentWeatherReducer } from './current-weather/slice';
import { searchReducer } from './search/slice';
import { filterReducer } from './filter/slice';

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
  search: searchReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
