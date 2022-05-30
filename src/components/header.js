import React from 'react';

import './header.css';

const Header = ({ version }) =>
  <div className="header">
    <span id="header-title">DevTrak v{version}</span>
  </div>;

export default Header;