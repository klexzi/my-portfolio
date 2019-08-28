import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import Page from '../Page/Page';
import PortfolioImagePreview from '../../components/PortfolioImageItem/PortfolioImagePreview';
import useStyles from './Portfolio.styles';

const portfolios = [
  {
    title: 'Lorem ipsum',
    images: [
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
  {
    title: 'Jumpman Up to Something',
    images: [
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
  {
    title: 'Water Corporation',
    images: [
      'https://images.unsplash.com/photo-1566836986583-94da6d4c6c67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
  {
    title: 'Future Hyndryx',
    images: [
      'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
  },
];
const Portfolio = () => {
  const classes = useStyles();
  return (
    <Page>
      <Typography variant="h2" component="h2" color="textPrimary">
        Portfolio
      </Typography>
      <Box className={classes.masonry} paddingY={5}>
        {portfolios.map(portfolio => (
          <PortfolioImagePreview {...portfolio} />
        ))}
      </Box>
    </Page>
  );
};

export default Portfolio;
