import React from 'react';
import { Grid, Box } from '@material-ui/core';

import StyledIcon from '../StyledIcon/StyledIcon';
import MenuIcons from '../MenuIcons/MenuIcons';

const Sidebar = () => {
  return (
    <Box display="flex" flexDirection="column" css={{ height: '100%' }}>
      <Box justifyContent="flex-start" flexGrow={1} flexDirection="column" />
      <Box justifyContent="center" flexGrow={1} flexDirection="column">
        <StyledIcon tipText="Home" active>
          <MenuIcons type="home" active />
        </StyledIcon>
        <StyledIcon tipText="About Me">
          <MenuIcons type="about" />
        </StyledIcon>
        <StyledIcon tipText="Works">
          <MenuIcons type="works" />
        </StyledIcon>
        <StyledIcon tipText="Resume">
          <MenuIcons type="resume" />
        </StyledIcon>
        <StyledIcon tipText="Contact">
          <MenuIcons type="contact" />
        </StyledIcon>
      </Box>
      <Box justifyItems="flex-end">
        <StyledIcon tipText="Download Resume">
          <MenuIcons type="download" />
        </StyledIcon>
      </Box>
    </Box>
  );
};

export default Sidebar;
