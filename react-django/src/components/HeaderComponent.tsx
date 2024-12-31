import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div">
        My Portfolio
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;