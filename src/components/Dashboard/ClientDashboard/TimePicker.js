import React, { Component } from 'react'
import './TimePicker.css'


class TimePicker extends Component {

  render() {
    // Array of Day mini COMPONENTS
    let timesSize = this.props.activeDay.times.length;
    let maxSize;

    switch(timesSize % 5){
      case 0:
        maxSize = 5;
        break;
      case 4:
        maxSize = 4;
        break;
      default:
        maxSize = 3;
        break;
    }

    const rowAmount = timesSize / maxSize;
    let rows = new Array(Math.floor(rowAmount)).fill([])

    const times = this.props.activeDay.times.map((timeData, index) => {
      return <Time time={timeData} clickedTime={() => this.props.clickedTime(timeData.time)}/>
    })

    console.log(maxSize, timesSize)
    times.forEach((item, index) => {
      console.log(index / maxSize)
      rows[Math.floor(index / maxSize)].push(item)
    })

    console.log(times)



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
