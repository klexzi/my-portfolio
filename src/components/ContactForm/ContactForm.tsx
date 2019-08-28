import React, { useState, SyntheticEvent, ChangeEvent } from 'react';
import { TextField, Box, FormControl, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textField: {
    margin: '10px',
  },
});
const ContactForm: React.FunctionComponent = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const classes = useStyles();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(values);
  };
  return (
    <Box>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box paddingY={4} display="flex" flexDirection="column">
          <Box>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                label="Name"
                value={values.name}
                name="name"
                onChange={handleChange}
                id="name"
                required
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                label="Email"
                type="email"
                value={values.email}
                name="email"
                onChange={handleChange}
                id="email"
                required
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                multiline
                rows={8}
                rowsMax={10}
                label="Message"
                value={values.message}
                name="message"
                onChange={handleChange}
                id="message"
                required
              />
            </FormControl>
          </Box>
          <Box paddingY={3}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Send Message &nbsp; <Icon>send</Icon>
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
