import React, { Component } from 'react'
import ClientDashboard from './ClientDashboard/ClientDashboard';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <ClientDashboard calendarId={this.props.match.params}/>
      </div>
    )
  }
}

export default Dashboard
