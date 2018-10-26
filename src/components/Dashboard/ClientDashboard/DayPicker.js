import React, { Component } from 'react';

// import { connect } from 'react-redux'
// import * as actions from '../../../actions'

const MockDays = [
  {
    day : "Monday",
    date: "10-25-18",
    times: [
      {
      time: "11:00",
      booked: false
      },
      {
        time: "12:00",
        booked: false
      },
    ]
  },
  {
    day : "Tuesday",
    date: "10-26-18",
    times: [
      {
        time: "1:00",
        booked: false
      },
      {
        time: "4:00",
        booked: false
      },
    ]
  }];


class DayPicker extends Component {

  render() {
    // Array of Day mini COMPONENTS
    const days = MockDays.map((dayData, index) => {
      return <Day day={dayData} clickedDay={() => this.props.clickedDay(dayData)}/>
    });

    return (
      <div>{days}</div>
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
