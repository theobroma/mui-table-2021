import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: 'rgb(240, 0, 71, 1)',
    },
  },
});
