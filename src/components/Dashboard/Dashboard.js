import React, { Component } from 'react'
import ClientDashboard from './ClientDashboard/ClientDashboard';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <ClientDashboard />
      </div>
    )
  }
}

export default Dashboard
