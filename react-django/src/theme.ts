import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4d95' },
    background: { default: '#ffffff', paper: '#f5f5f5' },
    text: { primary: '#000000', secondary: '#555555' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#66fcf1' },
    secondary: { main: '#ff4d95' },
    background: { default: '#0b0c10', paper: '#1f2833' },
    text: { primary: '#ffffff', secondary: '#c5c6c7' },
  },
});
