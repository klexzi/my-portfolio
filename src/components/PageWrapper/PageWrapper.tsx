import React from 'react';
import { Grid, Theme, Hidden } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

import Sidebar from '../Sidebar/Sidebar';
import PictureProfile from '../PictureProfile/PictureProfile';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Resume from '../../pages/Resume/Resume';
import Project from '../../pages/Project/Project';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'normal',
      justifyContent: 'normal',
    },
  },
  container: {
    backgroundColor: grey[900],
    height: '700px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100vh',
    },
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
      <Grid container item xs={12} md={10} className={classes.container}>
        <Grid
          className={classes.column}
          container
          direction="column"
          style={{ maxWidth: '75px' }}
          item
          xs={1}
        >
          <Sidebar />
        </Grid>
        <Hidden smDown>
          <Grid
            item
            xs={4}
            className={classes.column}
            style={{ position: 'relative' }}
          >
            <PictureProfile />
          </Grid>
        </Hidden>

        <Grid item xs={9} sm md className={classes.column}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects" exact component={Portfolio} />
          <Route path="/projects/:key" component={Project} />
          <Route path="/resume" exact component={Resume} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageWrapper;
