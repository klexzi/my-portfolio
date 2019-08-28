import React, { useEffect, useState, ReactElement } from 'react';
import Page from '../Page/Page';
import {
  Typography,
  Box,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import projectData, { ProjectData } from './Project.data';
import ContactForm from '../../components/ContactForm/ContactForm';
const useStyles = makeStyles(theme => ({
  date: {
    backgroundColor: theme.palette.primary.main,
    padding: '5px',
  },
}));
const Project: React.FunctionComponent = props => {
  const [values] = useState(projectData['sellvy']);
  const [imageSrc, setImageSrc] = useState(values.images[0]);
  const classes = useStyles();

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < values.images.length) {
        setImageSrc(values.images[i]);
        i++;
      } else {
        i = 0;
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [values, setImageSrc]);
  return (
    <Page>
      <Typography variant="h3" color="textPrimary" gutterBottom>
        {values.title}
      </Typography>
      <Box>
        <Typography className={classes.date} variant="overline" gutterBottom>
          {values.date}
        </Typography>
      </Box>
      <Box paddingY={3}>
        <img src={imageSrc} alt="project" />
      </Box>

      <Box marginBottom={4}>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {values.description}
        </Typography>
      </Box>
      <Typography variant="h4" color="textPrimary" gutterBottom>
        Stack
      </Typography>
      <List>
        {values.stack.map((val, i) => (
          <ListItem key={i}>
            <ListItemText
              primary={
                <Typography variant="subtitle1" color="textPrimary">
                  {val}
                </Typography>
              }
              style={{ color: 'white' }}
            />
          </ListItem>
        ))}
      </List>
      <Box marginTop={4}>
        <Typography variant="h5" color="textPrimary">
          Leave a Comment
        </Typography>
        <ContactForm />
      </Box>
    </Page>
  );
};

export default Project;
