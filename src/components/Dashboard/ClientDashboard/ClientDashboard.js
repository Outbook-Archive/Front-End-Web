import React, { Component } from 'react';
import DayPicker from './DayPicker';

import '../Dashboard.css';
import TimePicker from "./TimePicker";
import Confirm from "./Confirm";

class ClientDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeView: 'dayPicker',
      activeDay: null,
      activeTime: null
    };
  }

  viewSelect() {
    switch (this.state.activeView) {
      case 'dayPicker':
        return (
          <div>
            <div className="dashboard-title">Select a Day</div>
            <DayPicker clickedDay={ (day) => this.daySelect(day) }/>
          </div>
        );

      case 'timePicker':
        return (
          <div>
            <div className="dashboard-title">Select a Time</div>
            <TimePicker
              activeDay={ this.state.activeDay }
              clickedTime={ (time) => this.timeSelect(time) }
            />
          </div>
        );

      case 'confirmView':
        return (
          <div>
            <div className="dashboard-title">Please review your interview day and time</div>
            <Confirm day={this.state.activeDay} time={this.state.activeTime} />
          </div>
        );

      default:
        return null;
    }
  }

  daySelect(day) {
    this.setState({ activeDay: day, activeView: 'timePicker' });
  }

  timeSelect(time) {
    this.setState({ activeTime: time, activeView: 'confirmView' });
  }

  render() {
    // Render day, time, or confirm based on state
    const view = this.viewSelect();

    return (
      <div className={"client-dashboard"}>
        <Topbar />
        {view}
      </div>
    )
  }
}

// Mini COMPONENT
function Topbar(props) {
  return (
    <div className="top-bar">
      <div className="top-bar-item grey">15 minute Interview</div>
      <div className="top-bar-item right-text blue">Pacific Time - US & Canada<br/>12:06am</div>
    </div>
  )
}

export default ClientDashboard;
