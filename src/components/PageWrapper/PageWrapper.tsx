import React from 'react';
import { Grid, Theme } from '@material-ui/core';
import { Route } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import PictureProfile from '../PictureProfile/PictureProfile';
import Home from '../../pages/Home/Home';
import { makeStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Resume from '../../pages/Resume/Resume';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  },
  container: {
    backgroundColor: grey[900],
    height: '700px',
  },
  column: {
    height: '100%',
  },
}));
const PageWrapper: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container item xs={10} className={classes.container}>
        <Grid
          className={classes.column}
          direction="column"
          style={{ maxWidth: '75px' }}
          item
          xs={1}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={4}
          className={classes.column}
          style={{ position: 'relative' }}
        >
          <PictureProfile />
        </Grid>
        <Grid item xs={7} className={classes.column}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/works" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageWrapper;
