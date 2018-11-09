import React, { Component } from 'react'
import './TimePicker.css'


class TimePicker extends Component {

  render() {
    // Array of Day mini COMPONENTS
    let timesSize = this.props.activeDay.times.length;
    let maxSize;

    // Math for items per row
    switch(timesSize % 5){
      case 0:
      case 4:
        maxSize = 5;
        break;
      case 3:
      case 2:
        maxSize = 4;
        break;
      default:
        maxSize = 3;
        break;
    }

    const rowAmount = timesSize / maxSize;

    // Initializing rows
    let rows = new Array(Math.floor(rowAmount))
    for(let i = 0; i < rowAmount; i++){
      rows[i] = []
    }

    // Set up rows
    this.props.activeDay.times.forEach((timeData, index) => {
      const timeObject = <Time time={timeData} clickedTime={() => this.props.clickedTime(timeData.time)}/>
      const row = Math.floor(index/maxSize)
      rows[row].push(timeObject)
    })

    // Mapping time to rows
    const times = rows.map((row) => {
      return <div className="time-container-row">{row}</div>
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
      <p className="time-text">{ props.time.time }</p>
    </div>
  )
}

export default TimePicker
