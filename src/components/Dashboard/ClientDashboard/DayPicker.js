import React, { Component } from 'react'
import './DayPicker.css'

const MockDays = [
  {
    day : "Mon",
    date: "10-22-18",
    times: [
      {
      time: "11:00am",
      booked: false
      },
      {
        time: "12:00pm",
        booked: false
      },
      {
      time: "11:00am",
      booked: false
      },
      {
        time: "12:00pm",
        booked: false
      }
    ]
  },
  {
    day : "Tues",
    date: "10-23-18",
    times: [
      {
        time: "9:00am",
        booked: false
      },
      {
        time: "10:15am",
        booked: false
      },
      {
      time: "11:00am",
      booked: false
      },
      {
        time: "12:00pm",
        booked: false
      },
      {
        time: "1:00pm",
        booked: false
      },
      {
        time: "2:15pm",
        booked: false
      },

    ]
  },
  {
    day : "Wed",
    date: "10-24-18",
    times: [
      {
        time: "9:00am",
        booked: false
      },
      {
        time: "10:15am",
        booked: false
      },
      {
      time: "11:00am",
      booked: false
      },
      {
        time: "12:00pm",
        booked: false
      },
      {
        time: "1:00pm",
        booked: false
      },
      {
        time: "2:15pm",
        booked: false
      },
      {
      time: "2:30pm",
      booked: false
      },
    ]
  },
  {
    day : "Thurs",
    date: "10-24-18",
    times: [
      {
        time: "9:00am",
        booked: false
      },
      {
        time: "10:15am",
        booked: false
      },
      {
      time: "11:00am",
      booked: false
      },
      {
        time: "12:00pm",
        booked: false
      },
      {
        time: "1:00pm",
        booked: false
      },
      {
        time: "2:15pm",
        booked: false
      },
      {
      time: "2:30pm",
      booked: false
      },
      {
        time: "3:00pm",
        booked: false
      },
    ]
  },
  {
    day : "Fri",
    date: "10-24-18",
    times: [
      {
        time: "9:00am",
        booked: false
      },
      {
        time: "10:15am",
        booked: false
      },
      {
      time: "11:00am",
      booked: false
      },
      {
        time: "12:00pm",
        booked: false
      },
      {
        time: "1:00pm",
        booked: false
      },
      {
        time: "2:15pm",
        booked: false
      },
      {
      time: "2:30pm",
      booked: false
      },
      {
        time: "3:00pm",
        booked: false
      },
      {
        time: "4:30pm",
        booked: false
      },
    ]
  }
];


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
    console.log(this.days)
    // Array of Day mini COMPONENTS
    const daysDisplay = this.days.map(function(dayData, index){
      return (
        <li key={index} className={"day-item"}>
          <Day data={dayData} clickedDay={() => this.props.clickedDay(dayData)}/>
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
    <div onClick={props.clickedDay} className="day">
      <p className="day-text">{props.data.day}</p>
      <p className="day-date">{props.data.date}</p>
    </div>
  )
}

export default DayPicker;
