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
      <div className={"time-picker-container"}>
        {/*<div className={"time-picker-title"}><h1>Select a Time</h1></div>*/}
        <div className={"day-name"}>{this.props.activeDay.day}</div>
        <div className={"day-date"}>{this.props.activeDay.date}</div>
        {times}
        <button onClick={ this.props.backButton }>back</button>
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