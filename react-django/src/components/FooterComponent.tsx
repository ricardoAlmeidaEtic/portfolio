import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer: React.FC = () => (
  <Box textAlign="center" sx={{ marginTop: 4, padding: 2 }}>
    <Typography variant="body2" color="text.secondary">
      &copy; 2024 Ricardo Almeida. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;