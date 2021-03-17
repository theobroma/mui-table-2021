import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterLink from '../@components/FilterLink';
import HeaderFC from '../@components/Header';
import { DiscountFilters } from '../@types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const AppContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <HeaderFC>
      <div className={classes.root}>
        <FilterLink filterType={DiscountFilters.GOLD}>Gold</FilterLink>
        <FilterLink filterType={DiscountFilters.SILVER}>Silver</FilterLink>
        <FilterLink filterType={DiscountFilters.WOOD}>Wood</FilterLink>
        <FilterLink filterType={DiscountFilters.STANDART}>Standart</FilterLink>
      </div>
    </HeaderFC>
  );
};
