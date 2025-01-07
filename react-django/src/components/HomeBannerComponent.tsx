import React from 'react';
import { Box, Typography, Button, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Facebook, Twitter } from '@mui/icons-material';

const HomeBanner: React.FC = () => (
  <Box
    sx={{
      marginTop: 4,
      textAlign: 'center',
      padding: 4,
    }}
  >
    {/* Title */}
    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
      Hello, <span style={{ color: '#ff4d95' }}>I'm Ricardo Almeida</span>
    </Typography>
    <Typography variant="h5" sx={{ mb: 3 }}>
      Professional <span style={{ color: '#45a29e' }}>Software Developer</span>
    </Typography>

    {/* Social Media Icons */}
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
      <IconButton color="inherit">
        <GitHub />
      </IconButton>
      <IconButton color="inherit">
        <LinkedIn />
      </IconButton>
      <IconButton color="inherit">
        <Facebook />
      </IconButton>
      <IconButton color="inherit">
        <Twitter />
      </IconButton>
    </Stack>

    {/* Buttons */}
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button
        variant="outlined"
        sx={{
          color: 'text.primary',
          borderColor: 'primary.main',
          '&:hover': { borderColor: 'primary.dark' },
        }}
      >
        Contact Me
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'primary.main',
          '&:hover': { backgroundColor: 'primary.dark' },
        }}
      >
        Get Resume
      </Button>
    </Stack>
  </Box>
);

export default HomeBanner;
