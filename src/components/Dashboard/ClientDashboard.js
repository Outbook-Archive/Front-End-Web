import React, { Component } from 'react';
import DayPicker from './DayPicker';

import './Dashboard.css';

class ClientDashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      renderTimePicker: false,
      dayName: ''
    }

  }



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