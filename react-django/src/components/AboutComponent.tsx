import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => (
  <Box
    sx={{
      marginTop: 4,
      textAlign: 'center',
      padding: 4,
    }}
  >
    <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
      About Me
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
      I am a passionate web developer with a focus on modern technologies and clean design.
    </Typography>
  </Box>
);

export default About;
