import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../../theme/theme';
import Home from './Home';

storiesOf('Home', module).add('Home page', () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
));
