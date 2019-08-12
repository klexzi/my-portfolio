import React from 'react';
import { Box, Icon, Tooltip, Fade } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import { capitalizeString } from '../../helpers/utils';
import buttonClickSound from '../../../assets/button-click.wav';
export type SidebarIconProp = {
  type: 'home' | 'about' | 'contact' | 'works' | 'resume' | 'download resume',
  active?: boolean,
  classes: {
    box: string,
    icon: string,
  },
};

const useStyles = makeStyles({
  icon: {
    fontSize: (props: SidebarIconProp) =>
      props.type === 'download resume' ? 60 : props.active === true ? 48 : 36,
    padding: (props: SidebarIconProp) => (props.active === true ? 15 : 10),
  },
  box: {},
});

const StyledIcon = (props: SidebarIconProp) => {
  const { type, classes } = props;
  const iconType =
    type === 'contact'
      ? 'local_phone'
      : type === 'works'
      ? 'business_center'
      : type === 'about'
      ? 'person_outline'
      : type === 'resume'
      ? 'folder_open'
      : type === 'download resume'
      ? 'cloud_download'
      : 'home';
  const classesBase = useStyles(props);

  const onClick = () => {
    const sound = new Audio(buttonClickSound);
    sound.play();
  };
  return (
    <Tooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      title={capitalizeString(type)}
      placement="right"
      style={{ textTransform: 'capitalize' }}
    >
      <Box
        display="flex"
        onClick={onClick}
        justifyContent="center"
        className={classesBase.box}
      >
        <Icon
          color={
            props.active || props.type === 'download resume'
              ? 'primary'
              : 'inherit'
          }
          className={classesBase.icon}
        >
          {iconType}
        </Icon>
      </Box>
    </Tooltip>
  );
};
const SidebarIcon = withStyles(theme => ({
  box: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
    color: theme.palette.secondary.main,
  },
  icon: {
    '&:hover': {
      borderRadius: '100px',
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
}))(StyledIcon);

export default SidebarIcon;
