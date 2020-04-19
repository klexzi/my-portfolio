import React from 'react';
import Page from '../Page/Page';
import {
  Typography,
  Divider,
  Box,
  Icon,
  makeStyles,
  Grid,
  Link,
} from '@material-ui/core';
import { usePageStyles } from '../../helpers/hooks';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactForm from '../../components/ContactForm/ContactForm';

const useStyles = makeStyles({
  icon: {
    fontSize: '84px',
  },
});
const Contact = () => {
  const classes = usePageStyles();
  const contactClasses = useStyles();
  return (
    <Page>
      <Typography
        variant="h2"
        component="h2"
        className={classes.headline}
        color="textPrimary"
      >
        Contact
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color="textSecondary"
        className={classes.content}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Divider variant="fullWidth" />
      <Box marginTop={4} display="flex" justifyContent="center">
        <SectionTitle title="GET IN TOUCH" />
      </Box>
      <Grid container justify="center">
        <Grid item xs>
          <Typography color="primary" align="center">
            <Icon className={contactClasses.icon}>location_on</Icon>
          </Typography>
          <Typography align="center" color="textPrimary">
            Lagos, Nigeria
          </Typography>
        </Grid>
        >
        <Grid item xs>
          <Typography color="primary" align="center">
            <Icon className={contactClasses.icon}>email</Icon>
          </Typography>
          <Typography align="center" color="textPrimary">
            <Link color="inherit" href="mailto:kelechinwosumail@gmail.com">
              kelechinwosumail@gmail.com
            </Link>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography color="primary" align="center">
            <Icon className={contactClasses.icon}>perm_phone_msg</Icon>
          </Typography>
          <Typography align="center" color="textPrimary">
            <Link href="tel:+2348164239220" color="inherit">+2348164239220</Link>
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Box marginTop={4} display="flex" justifyContent="center">
        <SectionTitle title="SEND MESSAGE" />
      </Box>

      <ContactForm />
    </Page>
  );
};

export default Contact;
