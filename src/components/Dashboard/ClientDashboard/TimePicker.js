import React, { Component } from 'react'
import './TimePicker.css'


class TimePicker extends Component {

  render() {
    // Set up columns
    const times = this.props.activeDay.times.map((eventData, index) => {
      return <Time
        key={`timeObj-${index}`}
        time={eventData.event}
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
  const startTime = new Date(props.time.start.dateTime);
  const endTime = new Date(props.time.end.dateTime);

  const startFormat = getTime(startTime);
  const endFormat = getTime(endTime);

  return (
    <div onClick={props.clickedTime} className="time">
      <p className="time-text">{ startFormat }</p>
      <p className="time-text connector">to</p>
      <p className="time-text">{ endFormat }</p>

    </div>
  )
}

function getTime(date){
  const hour = date.getHours()
  const min = String(date.getMinutes()).padStart(2, '0')

  return `${hour}:${min}`
}

export default TimePicker
