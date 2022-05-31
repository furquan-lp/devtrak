import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './header.css';

const Header = ({ version }) =>
  <div className="header">
    <span id="header-title">DevTrak v{version}</span>
    <IconButton aria-label="menu" size="large">
      <MenuIcon />
    </IconButton>
  </div>;

export default Header;