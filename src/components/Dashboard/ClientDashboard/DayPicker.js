import React, { Component } from 'react'
import './DayPicker.css'

class DayPicker extends Component {
  componentWillMount(){
    const events = this.props.calendarData.events
    const weekdayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    let days = []

    events.forEach(function(event){
      const day = new Date(event.start.dateTime)
      const weekday = day.getDay()
      const weekdayName = weekdayNames[weekday]
      const display = `${day.getMonth()}-${day.getDate()}-${day.getFullYear()}`
      if(days.includes(weekday) === false){
        days[weekday] = {
          day: weekdayName,
          date: display,
          times: [{event}]
        }
      }
      else{
        days[weekday].times.push({event})
      }
    })
    this.days = days;
  }

  render() {
    // Array of Day mini COMPONENTS
    console.log(this.days)
    const daysDisplay = this.days.map((dayData, index) => {
      return (
        <li key={index} className={"day-item"}>
          <Day data={dayData} click={() => this.props.clickedDay(dayData)}/>
        </li>
      )
    });

    return (
      <div className={"day-container"}>{daysDisplay}</div>
    )
  }
}

// Mini COMPONENT
function Day(props) {
  return (
    <div onClick={props.click} className="day">
      <p className="day-text">{props.data.day}</p>
      <p className="day-date">{props.data.date}</p>
    </div>
  )
}

export default DayPicker;
