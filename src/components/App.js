import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Toolbar from '../components/Toolbar/Toolbar'; /* FIXME: change to navbar */
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

import Landing from './landing/Landing';
import Dashboard from './Dashboard/Dashboard';

import './app.css';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  render() {
    let sideDrawer;
    let backDrop;

    if (this.setState.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <Backdrop />;
    }
    return (
      <BrowserRouter>
        <div className="App" style={{height: '100%'}}>
          <Toolbar />
          {sideDrawer}
          {backDrop}
          <div>
          {/*<div>*/}
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
