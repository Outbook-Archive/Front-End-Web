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
        {/* <div className={"day-name"}>{this.props.activeDay.day}</div> */}
        <div className={"day-name"}>Monday</div>
        {/* <div className={"day-date"}>{this.props.activeDay.date}</div> */}
        <div className={"day-date"}>November 8, 2018</div>
        {times}
        <button className="back-btn-blue" onClick={ this.props.backButton }>back</button>
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
