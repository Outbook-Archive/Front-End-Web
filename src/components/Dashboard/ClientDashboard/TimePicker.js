import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import Time from './Time'

class TimePicker extends Component {

  render() {
    // Array of Day mini COMPONENTS
    const times = this.props.activeDay.times.map((timeData, index) => {
      return <Time time={timeData} clickedTime={() => this.props.clickedTime(timeData.time)}/>
    });

    return (
      <div>
        {this.props.activeDay.day}
        {this.props.activeDay.date}
        {times}
      </div>
    )
  }
}

// Mini COMPONENT
function Time(props) {
  return (
    <div onClick={props.clickedTime} className="time">
      <p className="time-text">{ props.time.time }</p>
    </div>
  )
}

export default TimePicker