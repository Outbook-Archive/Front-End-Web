import React from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import './Navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-toggle-btn">
        <DrawerToggleBtn click={props.drawerClickHandler} />
      </div>
      <div className="navbar-logo"><a href="/">OUTBOOK</a></div>
      <div className="spacer"/>
      <div className="navbar-navigation-items">
        <ul>
	        <Link to="/landing">
		        <li>Home</li>
	        </Link>
	        <Link to="/dashboard">
		        <li>Dashboard</li>
	        </Link>
        </ul>
      </div> {/* END toolbar-navigation-items */}
    </nav>
  </header>
);

export default navbar;