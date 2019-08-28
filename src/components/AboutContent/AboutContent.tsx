import React from 'react';
import { Grid, Typography, Theme, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export type AboutContentProps = {
  icon: string,
  title: string,
  children: string,
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    padding: '20px 0 20px 0',
  },
  content: {
    padding: '18px 0 18px 0',
  },
}));
const AboutContent = ({ title, icon, children }: AboutContentProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <img src={icon} width="80" height="80" />
      <Typography
        variant="h5"
        component="h4"
        color="textPrimary"
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography component="p" color="textSecondary">
        {children}
      </Typography>
    </Box>
  );
};

export default AboutContent;
