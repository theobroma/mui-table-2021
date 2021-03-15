import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterLink from '../@components/FilterLink';

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
    <div className={classes.root}>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
      <FilterLink type="GOLD">Gold</FilterLink>
      <FilterLink type="SILVER">Silver</FilterLink>
      <FilterLink type="WOOD">Wood</FilterLink>
      <FilterLink type="STANDART">Standart</FilterLink>
    </div>
  );
};
