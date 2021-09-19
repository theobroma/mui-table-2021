import { createTheme } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: blueGrey[400],
    },
    secondary: {
      main: 'rgb(240, 0, 71, 1)',
    },
  },
});
