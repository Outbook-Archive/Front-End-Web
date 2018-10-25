import React, { Component } from 'react';
import DayPicker from './DayPicker';

import '../Dashboard.css';
import TimePicker from "./TimePicker";

class ClientDashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      showTimes: false
    }

    this.handleShowTimes = this.handleShowTimes.bind(this)
  }

  handleShowTimes(theTime) {
    console.log("show times")
    this.setState({showTimes: true})
  }

  handleHideTimes() {
    this.setState({showTimes: false})
  }

  render() {

    // Render day or time based on state
    let view;

    if (this.state.showTimes) {
      view = <div className="times-container">
              <TimePicker />
              <button onClick={ (e) => {
                this.setState({showTimes: false})
              }} className="back-btn">Back</button>
            </div>
    } else {
      // this.setState({showTimes: false})
      view = <DayPicker viewSwitcher={
        (e) => {
          this.handleShowTimes()
        }
      }/>
    }


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
