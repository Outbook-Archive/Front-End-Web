import React, { Component } from 'react';
import DayPicker from './DayPicker';
import './styles.css';

class ClientDashboard extends Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-item grey">15 minute Interview</div>
          <div className="top-bar-item right-text blue">Pacific Time - US & Canada<br/>12:06am</div>
        </div>
        <div className="dashboard-title">Select a Day</div>

        <DayPicker />
      </div>
    )
  }
}

export default ClientDashboard;