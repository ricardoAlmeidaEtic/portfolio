// src/ThemeProviderWrapper.tsx

import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Switch, FormControlLabel } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
        label="Toggle Theme"
        sx={{ margin: 2 }}
      />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
