import React, { Component } from 'react'
import { connect } from 'react-redux';

import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import Backdrop from '../components/Backdrop/Backdrop'

import Landing from './Landing/Landing'
import Dashboard from './Dashboard/Dashboard'
import Confirm from './Dashboard/Confirm'

import './App.css'
import { simpleAction } from "../actions/SimpleAction";

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

  simpleAction = (event) => {
    this.props.simpleAction();
  };

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
            <Route path='/confirm' component={Confirm} />
          </div>
          {/*<pre>*/}
            {/*{*/}
              {/*JSON.stringify(this.props)*/}
            {/*}*/}
          {/*</pre>*/}

          {/*<button onClick={this.simpleAction}>Test redux action</button>*/}
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
