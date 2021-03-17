import * as React from 'react';
import cx from 'classnames';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterAC } from '../../@store/filter/slice';
import { FilterType } from '../../@types';
import {
  activeFiltersSelector,
  filterSelector,
} from '../../@store/filter/selectors';

interface IProps {
  filterType: FilterType;
}

export const FilterLink: React.FC<IProps> = ({ children, filterType }) => {
  const dispatch = useDispatch();
  const filterData = useSelector(filterSelector).data;
  const activeFiltersCount = useSelector(activeFiltersSelector).length;

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
