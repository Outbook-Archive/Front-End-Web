import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <h1 className="landing-title">Welcome to Outbook</h1>
        <p className="landing-subheader">Your Outlook candidate booking platform</p>
        <Link to="/dashboard" className="landing-link">enter the dashboard portal</Link> {/* <---- this is like an href */}
      </div>
    )
  }
}

export default Landing