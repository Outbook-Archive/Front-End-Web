import React, { Component } from 'react'
// eslint-disable-next-line
import { Link } from 'react-router-dom'
import ClientDashboard from './ClientDashboard/ClientDashboard';


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