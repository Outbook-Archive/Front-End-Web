import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Toolbar from '../components/Toolbar/Toolbar';

import Landing from './landing/Landing'
import Dashboard from './dashboard/Dashboard'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar />
          <main style={{marginTop: '54px'}}>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
