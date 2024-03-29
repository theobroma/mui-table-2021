import * as React from 'react';

import { Button } from '@material-ui/core';

import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import {
  activeFiltersSelector,
  filterSelector,
} from '../../@store/filter/selectors';
import { setFilterAC } from '../../@store/filter/slice';
import type { FilterType } from '../../@types';

interface IProps {
  filterType: FilterType;
}

export const FilterLink: React.FC<IProps> = ({ children, filterType }) => {
  const dispatch = useAppDispatch();
  const filterData = useAppSelector(filterSelector).data;
  const activeFiltersCount = useAppSelector(activeFiltersSelector).length;

  const currentFilter = filterData.filter((filter) => {
    return filter.name === filterType;
  })[0];

  return (
    <Button
      color={currentFilter.active ? 'secondary' : undefined}
      // The user cannot turn off the only included discount type
      disabled={
        activeFiltersCount < 2 && currentFilter.active ? true : undefined
      }
      onClick={() => dispatch(setFilterAC(filterType))}
      variant="outlined"
    >
      {children}
    </Button>
  );
};
