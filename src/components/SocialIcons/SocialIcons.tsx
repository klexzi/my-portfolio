import React from 'react';
import { makeStyles, Icon, Theme } from '@material-ui/core';

export type SocialIconsProp = {
  type: 'linkedin' | 'twitter' | 'github',
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&:hover': {
      borderRadius: '100px',
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
    color: theme.palette.common.white,
    padding: 10,
  },
}));
const SocialIcons = (props: SocialIconsProp) => {
  const classes = useStyles();
  const { type } = props;
  const iconType =
    type === 'linkedin'
      ? 'fa fa-linkedin'
      : type === 'twitter'
      ? 'fa fa-twitter'
      : 'fa fa-github';
  return <Icon className={`${classes.root} ${iconType}`} />;
};

export default SocialIcons;
