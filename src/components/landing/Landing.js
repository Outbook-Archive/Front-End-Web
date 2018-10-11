import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Outbook!</h1>
        <Link to="/dashboard">enter the dashboard portal</Link> {/* <---- this is like an href */}
      </div>
    )
  }
}

export default Landing