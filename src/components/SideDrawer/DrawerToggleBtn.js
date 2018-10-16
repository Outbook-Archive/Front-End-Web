import React from 'react';

import './DrawerToggleBtn.css';

const drawerToggleButton = props => (
  <button className="toggle-btn" onClick={props.click}>☰</button>
);

export default drawerToggleButton;