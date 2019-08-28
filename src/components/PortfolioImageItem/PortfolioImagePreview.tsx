import React, { useState } from 'react';
import { Fade, Box, makeStyles, Typography } from '@material-ui/core';

interface PortfolioImagePreview {
  images: Array<string>;
  title: string;
}
const useStyles = makeStyles({
  image: {
    width: '100%',
    height: 'auto',
  },
});
const PortfolioImagePreview = ({ images, title }: PortfolioImagePreview) => {
  const [imageSrc] = useState(images[0]);
  const classes = useStyles();
  return (
    <Box marginBottom={10}>
      <Box>
        <Fade in timeout={1000}>
          <img className={classes.image} alt="portfolio" src={imageSrc} />
        </Fade>
        <Typography variant="h5" color="textPrimary">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioImagePreview;
