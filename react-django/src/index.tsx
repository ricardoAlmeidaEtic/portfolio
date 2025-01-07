import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './index.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import React, { useState } from 'react';

const homepageElement = document.getElementById('homepage') as HTMLElement | null;

if (homepageElement) {
  const root = ReactDOM.createRoot(homepageElement);

  const RootApp = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </ThemeProvider>
    );
  };

  root.render(<RootApp />);
}
