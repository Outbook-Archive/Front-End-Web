import React, { Component } from 'react'

import Time from './Time'

class TimePicker extends Component {
  render() {
    return(
      <div className="time-picker-container">
        <div className="time-picker-content">
          <h1>{this.props.day}</h1>
          <p>The Date</p>
        </div>

        <h1>Select a Time </h1>

        <Time time="11:00 am" onClick={console.log("clicked 11:00am")} />
        <Time time="12:00 pm" onClick={console.log("clicked 12:00pm")} />
        <Time time="1:00 pm" onClick={console.log("clicked 1:00pm")} />
        <Time time="3:15 pm" onClick={console.log("clicked 3:15pm")} />
      </div>
    )
  }
}

export default TimePicker