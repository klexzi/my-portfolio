import React, { useEffect, useRef } from 'react';
import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import Typed from 'typed.js';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  },
  overlay: {
    width: 'inherit',
    height: 'inherit',
  },
  headline: {
    fontWeight: 900,
    fontSize: '80px',
    lineHeight: '100px'
  },
}));
const Home = () => {
  const el = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        'Developing high-quality software designs and architectures.',
      'Producing, testing and debugging code','Directing software development projects.',
       'Leading engineers and developers.'
      ],
      typeSpeed: 50,
      backSpeed: 20,
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
          <Typography ref={el} variant="h5" component="span" color="textSecondary"/>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
