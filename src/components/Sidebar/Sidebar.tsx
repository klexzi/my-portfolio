import React from 'react';
import { Grid, Box } from '@material-ui/core';

import StyledIcon from '../StyledIcon/StyledIcon';
import MenuIcons from '../MenuIcons/MenuIcons';

const Sidebar = () => {
  return (
    <Grid direction="column" container item xs={1}>
      <Box display="flex" flexDirection="column" css={{ height: '100vh' }}>
        <Box justifyContent="flex-start" flexGrow={1} flexDirection="column" />
        <Box justifyContent="center" flexGrow={1} flexDirection="column">
          <StyledIcon tipText="Home" active>
            <MenuIcons type="home" active />
          </StyledIcon>
          <StyledIcon />
          <StyledIcon tipText="Contact">
            <MenuIcons type="contact" />
          </StyledIcon>
          <StyledIcon tipText="Works">
            <MenuIcons type="works" />
          </StyledIcon>
          <StyledIcon tipText="Resume">
            <MenuIcons type="resume" />
          </StyledIcon>
        </Box>
        <Box justifyItems="flex-end">
          <StyledIcon tipText="Download Resume">
            <MenuIcons type="download" />
          </StyledIcon>
        </Box>
      </Box>
    </Grid>
  );
};

export default Sidebar;
