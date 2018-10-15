import React from 'react';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <DrawerToggleBtn />
      <div className="toolbar-logo"><a href="/">The Logo</a></div>
      <div className="spacer"/>
      <div className="toolbar-navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div> {/* END toolbar-navigation-items */}
    </nav>
  </header>
);

export default toolbar;