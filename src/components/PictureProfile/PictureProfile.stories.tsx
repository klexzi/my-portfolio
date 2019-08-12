import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../../theme/theme';
import PictureProfile from './PictureProfile';

storiesOf('PictureProfile', module).add('Default', () => (
  <ThemeProvider theme={theme}>
    <PictureProfile />
  </ThemeProvider>
));
