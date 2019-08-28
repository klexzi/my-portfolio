import React, { ReactNode } from 'react';
import { Box, Icon, Tooltip, Fade } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const buttonClickSound = require('../../assets/button-click.wav');

export type StyledIconProp = {
  tipText: string,
  children: React.ReactElement,
  active?: boolean,
};

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
    color: theme.palette.secondary.main,
    marginBottom: 1,
  },
}));

const StyledIcon = (props: StyledIconProp) => {
  const classesBase = useStyles(props);
  const { tipText } = props;
  const onClick = () => {
    const sound = new Audio(buttonClickSound);
    sound.play();
  };
  return (
    <Tooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      title={tipText}
      placement="right"
      style={{ textTransform: 'capitalize' }}
    >
      <Box
        display="flex"
        onClick={onClick}
        justifyContent="center"
        className={classesBase.box}
      >
        {props.children}
      </Box>
    </Tooltip>
  );
};

export default StyledIcon;
