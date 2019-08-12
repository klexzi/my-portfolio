import React, { useEffect, useRef } from 'react';
import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import Typed from 'typed.js';

import Dp from '../../../assets/dp-large.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `url(${Dp})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    width: '800px',
    height: '100vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0 ,0, 0.7)',
    width: 'inherit',
    height: 'inherit',
  },
  headline: {
    fontWeight: 900,
    fontSize: '80px',
  },
  message: {
    fontSize: '30px',
  }
}));
const Home = () => {
  const el = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'Develop high-quality software design and architecture.',
      'Producing, testing and debugging code','Directing software development projects.',
       'Leading engineers and developers.'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    let typed = new Typed((el as any).current, options)
    return () => {
      typed.destroy()
    };
  }, [el]);
  const classes = useStyles();
  return (
    <Box className={classes.root} display="flex">
      <Box className={classes.overlay} display="flex" alignItems="center">
        <Box p={3} flexDirection="column">
          <Typography variant="h5" component="h5" color="textSecondary">
            Hi, I am
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            className={classes.headline}
            color="textPrimary"
          >
            Kelechi Nwosu
          </Typography>
          <Typography ref={el} component="span" color="textSecondary" className={classes.message}>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
