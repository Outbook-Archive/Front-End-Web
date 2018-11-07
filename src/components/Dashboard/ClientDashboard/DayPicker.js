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
    ]
  },
  {
    day : "Tues",
    date: "10-23-18",
    times: [
      {
        time: "1:00pm",
        booked: false
      },
      {
        time: "4:00pm",
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
        time: "2:15pm",
        booked: false
      },
    ]
  }
];


class DayPicker extends Component {

  render() {
    // Array of Day mini COMPONENTS
    const days = MockDays.map((dayData, index) => {
      return (
        <li key={index} className={"day-item"}>
          <Day day={dayData} clickedDay={() => this.props.clickedDay(dayData)}/>
        </li>
      )
    });

    return (
      <div className={"day-container"}>{days}</div>
    )
  }
}

// Mini COMPONENT
function Day(props) {
  return (
    <div onClick={props.clickedDay} className="day">
      <p className="day-text">{props.day.day}</p>
      <p className="day-date">{props.day.date}</p>
    </div>
  )
}

export default DayPicker;
