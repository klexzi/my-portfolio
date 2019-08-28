import React from 'react';
import { Box, Typography } from '@material-ui/core';

interface SectionTitleTypes {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleTypes) => (
  <Box marginBottom={3}>
    <Typography variant="h4" color="textPrimary" paragraph>
      {title}
    </Typography>
  </Box>
);

export default SectionTitle;
