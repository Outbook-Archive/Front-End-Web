import React, { Component } from 'react'
import './TimePicker.css'


class TimePicker extends Component {

  render() {
    // Set up columns
    const times = this.props.activeDay.times.map((eventData, index) => {
      return <Time
        key={`timeObj-${index}`}
        time={eventData.format}
        clickedTime={() => this.props.clickedTime(eventData)}/>
    })
    return (
      <div className="time-picker-container">
        <div className="day-name">{this.props.activeDay.day}</div>
        <div className="day-date">{this.props.activeDay.date}</div>
        <div className="time-container">
          {times}
        </div>
        <button className="back-btn-blue" onClick={ this.props.backButton }>back</button>
      </div>
    )
  }
}

// Mini COMPONENT
function Time(props) {
  return (
    <div onClick={props.clickedTime} className="time">
      <p className="time-text">{ props.time.start }</p>
    </div>
  )
}

export default TimePicker
