import React from 'react';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-btn">
        <DrawerToggleBtn click={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo"><a href="/">THE LOGO</a></div>
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