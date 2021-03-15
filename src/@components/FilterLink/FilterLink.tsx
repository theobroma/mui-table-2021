import { Button } from '@material-ui/core';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterAC } from '../../@store/filter/slice';
import { FilterType } from '../../@types';

interface IProps {
  filterType: FilterType;
}

export const FilterLink: React.FC<IProps> = ({ children, filterType }) => {
  const dispatch = useDispatch();
  return (
    <Button
      //   type="button"
      onClick={() => dispatch(setFilterAC(filterType))}
      variant="outlined"
    >
      {children}
    </Button>
  );
};
