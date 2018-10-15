import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Toolbar from '../components/Toolbar/Toolbar'; /* FIXME: change to navbar */

import Landing from './landing/Landing'
import Dashboard from './Dashboard/Dashboard'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar />
          <div style={{marginTop: '54px'}}>
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
