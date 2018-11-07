import React, { Component } from 'react'

// COMPONENTS
import DayPicker from './DayPicker'
import TimePicker from './TimePicker'
import Confirm from './Confirm'
import Weather from './Weather'

// STYLES
import './ClientDashboard.css'

class ClientDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeView: 'dayPicker',
      activeDay: null,
      activeTime: null
    };
  }

  backButton(view) {
    switch (view) {
      case 'toDayPicker':
        this.setState({
          activeView: 'dayPicker',
          activeDay: null
        });
        break;
      case 'toTimePicker':
        this.setState({
          activeView: 'timePicker',
          activeTime: null
        });
        break;
    }
  }

  viewSelect() {
    switch (this.state.activeView) {
      case 'dayPicker':
        return (
          <div className="daypicker-content">
            <div className="dashboard-title">Select a Day</div>
            <DayPicker
              clickedDay={ (day) => this.daySelect(day)}
            />
          </div>
        );

      case 'timePicker':
        return (
          <div className="timepicker-content">
            <div className="dashboard-title">Select a Time</div>
            <TimePicker
              activeDay={ this.state.activeDay }
              clickedTime={ (time) => this.timeSelect(time)}
              backButton={ () => this.backButton('toDayPicker')}
            />
          </div>
        );

      case 'confirmView':
        return (
          <div className="confirm-view-content">
            <div className="dashboard-title">Please review your interview day and time</div>
            <Weather />
            <Confirm
              day={this.state.activeDay}
              time={this.state.activeTime}
              backButton={ () => this.backButton('toTimePicker')}
            />
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
  const now = new Date();

  return (
    <div className="top-bar">
      <div className="top-bar-item grey">15 minute Interview</div>
      <div className="top-bar-item right-text blue">Pacific Time - US & Canada <br/></div>

    </div>
  )
}

export default ClientDashboard;
