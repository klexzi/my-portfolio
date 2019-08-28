import React from 'react';
import Page from '../Page/Page';
import { Typography, Divider, Box, Icon, makeStyles } from '@material-ui/core';
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
      <Box
        display="flex"
        justifyContent="space-between"
        paddingX={10}
        paddingY={5}
      >
        <Box>
          <Typography color="primary" align="center">
            <Icon className={contactClasses.icon}>location_on</Icon>
          </Typography>
          <Typography color="textPrimary">Lagos, Nigeria</Typography>
        </Box>
        <Box>
          <Typography color="primary" align="center">
            <Icon className={contactClasses.icon}>email</Icon>
          </Typography>
          <Typography color="textPrimary">
            kelechinwosumail@gmail.com
          </Typography>
        </Box>
        <Box>
          <Typography color="primary" align="center">
            <Icon className={contactClasses.icon}>perm_phone_msg</Icon>
          </Typography>
          <Typography color="textPrimary">+2348164239220</Typography>
        </Box>
      </Box>
      <Divider />
      <Box marginTop={4} display="flex" justifyContent="center">
        <SectionTitle title="SEND MESSAGE" />
      </Box>
      
      <ContactForm />
    </Page>
  );
};

export default Contact;
