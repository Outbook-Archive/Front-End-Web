import React, { Component } from 'react';
import DayPicker from './DayPicker';

import '../Dashboard.css';
import TimePicker from "./TimePicker";
import Confirm from "./Confirm";

class ClientDashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeView: 'dayPicker',
      activeDay: null,
      activeTime: null
    };

  }


  viewSelect() {
    switch (this.state.activeView) {
      case 'dayPicker':
        return <DayPicker
                  clickedDay={ (day) => this.daySelect(day) }
                />;

      case 'timePicker':
        return <TimePicker
                  activeDay={ this.state.activeDay }
                  clickedTime={ (time) => this.timeSelect(time) }
                />;

      case 'confirmView':
        return <Confirm day={this.state.activeDay} time={this.state.activeTime} />;

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
      <div>
        <div className="top-bar">
          <div className="top-bar-item grey">15 minute Interview</div>
          <div className="top-bar-item right-text blue">Pacific Time - US & Canada<br/>12:06am</div>
        </div>
        <div className="dashboard-title">Select a Day</div>
        {view}

      </div>
    )
  }
}

export default ClientDashboard;
