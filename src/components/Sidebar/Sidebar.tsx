import React from 'react';
import { Grid, Box } from '@material-ui/core';

import SidebarIcon from '../SidebarIcon/SidebarIcon';

const Sidebar = () => {
  return (
    <Grid direction="column" container item xs={1}>
      <Box display="flex" flexDirection="column" css={{ height: '100vh' }}>
        <Box justifyContent="flex-start" flexGrow={1} flexDirection="column" />
        <Box justifyContent="center" flexGrow={1} flexDirection="column">
          <SidebarIcon type="home" active />
          <SidebarIcon type="about" />
          <SidebarIcon type="contact" />
          <SidebarIcon type="works" />
          <SidebarIcon type="resume" />
        </Box>
        <Box justifyItems="flex-end">
          <SidebarIcon type="download resume" />
        </Box>
      </Box>
    </Grid>
  );
};

export default Sidebar;
