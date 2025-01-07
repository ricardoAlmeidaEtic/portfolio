import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => (
  <AppBar position="static">
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" component="div">
        Ricardo Almeida
      </Typography>
      <Button
        onClick={toggleTheme}
        variant="outlined"
        sx={{
          color: 'inherit',
          borderColor: 'inherit',
          '&:hover': { borderColor: 'primary.light' },
        }}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
