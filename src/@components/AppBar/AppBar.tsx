import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // marginTop: 8,
    // width: '100%',
    // marginBottom: 16,
  },
});

export const CustomAppBar: React.FC = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Weather App</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;
