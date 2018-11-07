import React, { Component } from 'react'
import './TimePicker.css'


class TimePicker extends Component {

  render() {
    // Array of Day mini COMPONENTS
    const times = this.props.activeDay.times.map((timeData, index) => {
      return <Time time={timeData} clickedTime={() => this.props.clickedTime(timeData.time)}/>
    });

    return (
      <div className={"time-picker-container"}>
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