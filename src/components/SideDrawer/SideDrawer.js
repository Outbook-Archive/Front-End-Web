import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <h1>OUTBOOK</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
      </ul>
    </nav>
  );
};

export default sideDrawer;
