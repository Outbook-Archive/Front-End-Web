import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import Backdrop from '../components/Backdrop/Backdrop'

import Login from './Login/Login'
import Landing from './Landing/Landing'
import Dashboard from './Dashboard/Dashboard'
import Confirm from './Dashboard/ClientDashboard/Confirm'
import Complete from './Complete/Complete'
import CandidateLink from './CandidateLink/CandidateLink'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      sideDrawerOpen: false,
      isLoggedIn: false,
 
    };
  }

  handleLogin = (l) => {
    console.log("Hello there? I'm logging in")
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogout = (l) => {
    this.setState({
      isLoggedIn: false,
    })
  }
  
  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

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
          <Route exact path='/login' component={Login} />
          <Navbar 
            drawerClickHandler={this.drawerToggleClickHandler} 
            loginStatus={this.state.userLoggedIn} 
          />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <div className="landing-container">
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard/:calendarId' component={Dashboard}/>
            <Route path='/confirm' component={Confirm} />
            <Complete/>
            <Route 
              path='/candidateLink' 
              render = {
                () => {
                  return <CandidateLink 
                    handleLogin={this.handleLogin} 
                    name={this.interviewerName} 
                    candidateLink={this.candidateLink} 
                  />
                }
              }
            />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
