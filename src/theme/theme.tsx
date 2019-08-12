import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#40c4ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e0e0e0',
      contrastText: '#fff',
    },
    background: {
      paper: '#000',
      default: '#000',
    },
  },
});

export default theme;
