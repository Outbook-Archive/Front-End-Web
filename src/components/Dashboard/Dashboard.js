import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClientDashboard from './ClientDashboard';


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ClientDashboard />

      </div>
    )
  }
}

export default Dashboard