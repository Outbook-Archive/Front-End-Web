import React, { Component } from 'react';
import DayPicker from './DayPicker';
import TimePicker from './TimePicker';

import './Dashboard.css';

class ClientDashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      renderTimePicker: false
    }

    this.renderTimePicker = this.renderTimePicker.bind(this)
  }

  renderTimePicker(){
    if (this.state.renderTimePicker) {
      return (
        <TimePicker />
      )
    } else {
      return null
    }
  }


  render() {
    return (
      <div>
        {this.renderTimePicker()}
        <div className="top-bar">
          <div className="top-bar-item grey">15 minute Interview</div>
          <div className="top-bar-item right-text blue">Pacific Time - US & Canada<br/>12:06am</div>
        </div>
        <div className="dashboard-title">Select a Day</div>

        <DayPicker handleRenderTime={()=> {
          console.log(this.state.renderTimePicker)
          this.setState({ renderTimePicker: true })
          console.log('clicked')
          console.log(this.state.renderTimePicker)
        }}/>
      </div>
    )
  }
}

export default ClientDashboard;