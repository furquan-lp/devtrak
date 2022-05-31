import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './header.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#f1faee'
    }
  }
});

const Header = ({ version }) =>
  <div className="header">
    <span id="header-title">DevTrak v{version}</span>
    <ThemeProvider theme={theme}>
      <IconButton aria-label="menu" size="large" color="primary">
        <MenuIcon />
      </IconButton>
    </ThemeProvider>
  </div>;

export default Header;