import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/styles';
import { withKnobs } from '@storybook/addon-knobs';

import theme from '../../theme/theme';
import About from '../About/About';
import AppBaseline from '../../components/AppBaseline/AppBaseline';
import Resume from '../Resume/Resume';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Project from '../Project/Project';

const stories = storiesOf('Pages', module);
const hocDecoratiors = (storyFn: Function) => (
  <ThemeProvider theme={theme}>
    <AppBaseline>{storyFn()}</AppBaseline>
  </ThemeProvider>
);
stories.addDecorator(withKnobs);
stories.addDecorator(hocDecoratiors);
stories.add('Home', () => <Home />);
stories.add('About', () => <About />);
stories.add('Resume', () => <Resume />);
stories.add('Contact', () => <Contact />);
stories.add('Portfolio', () => <Portfolio />);
stories.add('Project', () => <Project />);
