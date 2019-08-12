import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { storiesOf } from '@storybook/react';

import Sidebar from './Sidebar';
import theme from '../../theme/theme';

storiesOf('Sidebar', module).add('default', () => (
  <ThemeProvider theme={theme}>
    <Sidebar />
  </ThemeProvider>
));
