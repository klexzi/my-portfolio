import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Page from '../Page/Page';
import PortfolioImagePreview from '../../components/PortfolioImagePreview/PortfolioImagePreview';
import useStyles from './Portfolio.styles';
import Project from '../../data/projects';

const Portfolio = () => {
  const classes = useStyles();
  const portfolios = new Project().listProjects();

  return (
    <Page>
      <Typography variant="h2" component="h2" color="textPrimary">
        Portfolio
      </Typography>
      <Box className={classes.masonry} paddingY={5}>
        {portfolios.map(portfolio => (
          <PortfolioImagePreview
            key={portfolio.title}
            {...portfolio}
            identifier={portfolio.identifier}
          />
        ))}
      </Box>
    </Page>
  );
};

export default Portfolio;
