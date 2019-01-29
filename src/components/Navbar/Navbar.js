import React from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import './Navbar.css';

const Navbar = (props) => {
  console.log(props)

    return(
      <header className="navbar">
        <nav className="navbar-navigation">
          <div className="navbar-toggle-btn">
            <DrawerToggleBtn onClick={props.drawerClickHandler} />
          </div>
          <div className="navbar-logo"><a href="/">OUTBOOK</a></div>
          <div className="spacer"/>

          <div className="navbar-navigation-items">
            <ul>
              <Link to="/login">
                {!props && <li id="login"><a href="#login">Login</a></li>}
                {props && <li id="logout"><a href="#logout">Logout</a></li>}
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    )
  
}





export default Navbar;