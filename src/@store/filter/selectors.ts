import { RootState } from '..';

export const filterSelector = (state: RootState) => {
  return state.filter;
};

export const activeFiltersSelector = (state: RootState) => {
  return state.filter.data
    .filter((filter) => {
      return filter.active;
    })
    .map((obj) => obj.name);
};
