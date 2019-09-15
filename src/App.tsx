import React from 'react';
import PageWrapper from './components/PageWrapper/PageWrapper';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/theme';
import AppBaseline from './components/AppBaseline/AppBaseline';
import Aos from 'aos';

const App: React.FC = () => {
  Aos.init();
  return (
    <ThemeProvider theme={theme}>
      <AppBaseline>
        <Router>
          <PageWrapper />
        </Router>
      </AppBaseline>
    </ThemeProvider>
  );
};

export default App;
