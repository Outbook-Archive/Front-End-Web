import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import Backdrop from '../components/Backdrop/Backdrop'

import Landing from './Landing/Landing'
import Dashboard from './Dashboard/Dashboard'

import './App.css'


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <div className="landing-container">
            <Route exact path='/' component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
