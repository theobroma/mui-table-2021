import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Container,
  Grid,
} from '@material-ui/core';
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
          <Container maxWidth="lg">
            <Grid container spacing={3} style={{ padding: 3 }}>
              <Grid item xs={12}>
                <div className={classes.links}>
                  <FilterLink filterType={DiscountFilters.GOLD}>
                    Gold
                  </FilterLink>
                  <FilterLink filterType={DiscountFilters.SILVER}>
                    Silver
                  </FilterLink>
                  <FilterLink filterType={DiscountFilters.WOOD}>
                    Wood
                  </FilterLink>
                  <FilterLink filterType={DiscountFilters.STANDART}>
                    Standart
                  </FilterLink>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;
