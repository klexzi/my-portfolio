import React, { useState } from 'react';
import { Fade, Box, makeStyles, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
interface PortfolioImagePreview {
  images: Array<string>;
  title: string;
  identifier: string;
}
const useStyles = makeStyles({
  image: {
    width: '100%',
    height: 'auto',
  },
});
const PortfolioImagePreview = ({
  images,
  title,
  identifier,
}: PortfolioImagePreview) => {
  const [imageSrc] = useState(images[0]);
  const classes = useStyles();
  return (
    <Box marginBottom={5}>
      <Link to={`/projects/${identifier}`} component={RouterLink}>
        <Fade in timeout={1000}>
          <img className={classes.image} alt="portfolio" src={imageSrc} />
        </Fade>
        <Typography variant="h5" color="textPrimary">
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default PortfolioImagePreview;
