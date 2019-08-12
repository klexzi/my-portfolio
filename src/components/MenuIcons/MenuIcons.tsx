import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Icon, Theme } from '@material-ui/core';

export type MenuIconsProp = {
  type: 'home' | 'about' | 'contact' | 'works' | 'resume' | 'download',
  active?: boolean,
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&:hover': {
      borderRadius: '100px',
      border: `1px solid ${theme.palette.primary.main}`,
    },
    fontSize: (props: MenuIconsProp) =>
      props.type === 'download' ? 60 : props.active === true ? 48 : 36,
    padding: (props: MenuIconsProp) => (props.active === true ? 15 : 10),
  },
}));

const MenuIcons = (props: MenuIconsProp) => {
  const classes = useStyles(props);
  const { type } = props;
  const iconType =
    type === 'contact'
      ? 'local_phone'
      : type === 'works'
      ? 'business_center'
      : type === 'about'
      ? 'person_outline'
      : type === 'resume'
      ? 'folder_open'
      : type === 'download'
      ? 'cloud_download'
      : 'home';
  return (
    <Icon
      color={props.active || props.type === 'download' ? 'primary' : 'inherit'}
      className={classes.root}
    >
      {iconType}
    </Icon>
  );
};

export default MenuIcons;
