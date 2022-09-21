import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../configureStore';
import { activeFiltersSelector } from '../filter/selectors';

export const clientsSelector = (state: RootState) => {
  return state.clients;
};

export const filteredClientsSelector = createSelector(
  activeFiltersSelector,
  clientsSelector,
  (filters, clients) =>
    clients.data.filter((item) => {
      return filters.includes(item.discountType);
    }),
);
