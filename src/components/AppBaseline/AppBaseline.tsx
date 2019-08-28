import React from 'react';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: grey[700],
      outline: '1px solid slategrey',
    },
  },
}));
const AppBaseline: React.FC = props => {
  const { children = null } = props;
  useStyles();
  return <React.Fragment>{children}</React.Fragment>;
};

export default AppBaseline;
