import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/">GO HOME!!!</Link>
      </div>
    )
  }
}

export default Dashboard