import React from 'react';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import './Navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-toggle-btn">
        <DrawerToggleBtn click={props.drawerClickHandler} />
      </div>
      <div className="navbar-logo"><a href="/">THE LOGO</a></div>
      <div className="spacer"/>
      <div className="navbar-navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div> {/* END toolbar-navigation-items */}
    </nav>
  </header>
);

export default navbar;