import React, { Component } from 'react'
import './DayPicker.css'

class DayPicker extends Component {
  componentWillMount(){
    const events = this.props.calendarData.events
    const weekdayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    let days = []

    events.forEach(function(event){
      const startTime = new Date(event.start.dateTime);
      const endTime = new Date(event.end.dateTime);
      const startFormat = getTime(startTime);
      const endFormat = getTime(endTime);

      const weekday = startTime.getDay()
      const weekdayName = weekdayNames[weekday]
      const longDisplay = `${startTime.getMonth()}-${startTime.getDate()}-${startTime.getFullYear()}`

      if(!days[weekday]){
        days[weekday] = {
          day: weekdayName,
          date: longDisplay,
          times: [{event, format: {start: startFormat, end: endFormat}}]
        }
      }
      else{
        console.log(days)
        days[weekday].times.push({event, format: {start: startFormat, end: endFormat}})
      }
    })

    this.days = days;
  }

  render() {
    // Array of Day mini COMPONENTS
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

// Getting time
function getTime(date){
  const hour = date.getHours() % 12
  const min = String(date.getMinutes()).padStart(2, '0')
  const time = ((hour === 0) || (hour > 12) ? 'AM' : 'PM')
  return `${hour}:${min}${time}`
}


export default DayPicker;
