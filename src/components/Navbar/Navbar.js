import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <header className="navbar">
        <nav className="navbar-navigation">
          <div className="navbar-toggle-btn">
            <DrawerToggleBtn />
            {/* <DrawerToggleBtn onClick={drawerClickHandler} /> */}
          </div>
          <div className="navbar-logo"><a href="/">OUTBOOK</a></div>
          <div className="spacer"/>

          <div className="navbar-navigation-items">
            <ul>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/dashboard">
                <li>Dashboard</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}





export default Navbar;