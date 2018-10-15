import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Toolbar from '../components/Toolbar/Toolbar'; /* FIXME: change to navbar */
import SideDrawer from '../components/SideDrawer/SideDrawer';

import Landing from './landing/Landing';
import Dashboard from './Dashboard/Dashboard';

import './app.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{height: '100%'}}>
          <Toolbar />
          <SideDrawer />
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
