import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#40c4ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e0e0e0',
      contrastText: grey[100],
    },
    background: {
      paper: '#000',
      default: '#000',
    },
    text: {
      secondary: grey[500],
    },
  },
  typography: {
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 900,
    },
    h4: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 900,
    },
  },
});

export default theme;
