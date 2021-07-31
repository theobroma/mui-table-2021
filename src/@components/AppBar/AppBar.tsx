import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import { DiscountFilters } from '../../@types';
import FilterLink from '../FilterLink';

const useStyles = makeStyles((theme) => ({
  links: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const CustomAppBar: React.FC = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Table</Typography>
          <div className={classes.links}>
            <FilterLink filterType={DiscountFilters.GOLD}>Gold</FilterLink>
            <FilterLink filterType={DiscountFilters.SILVER}>Silver</FilterLink>
            <FilterLink filterType={DiscountFilters.WOOD}>Wood</FilterLink>
            <FilterLink filterType={DiscountFilters.STANDART}>
              Standart
            </FilterLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;
