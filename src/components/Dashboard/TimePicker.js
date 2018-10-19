import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Time from './Time'

class TimePicker extends Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
  }

  click = () => {
    this.props.viewSwitcher()
  }

  render() {
    return(
      <div className="time-picker-container">
        <div className="time-picker-content">
          <h1>Day{this.props.day}</h1>
          <p>Date{this.props.date}</p>
        </div>

        <h2>Select a Time </h2>

        <Link time="11:00" to="./confirm" className="time-link"><Time time="11:00 am" onClick={console.log("clicked 11:00am")} /></Link>
        <Link to="./confirm" className="time-link"><Time time="12:00 pm" onClick={console.log("clicked 12:00pm")} /></Link>
        <Link to="./confirm" className="time-link"><Time time="1:00 pm" onClick={console.log("clicked 1:00pm")} /></Link>
        <Link to="./confirm" className="time-link"><Time time="3:15 pm" onClick={console.log("clicked 3:15pm")} /></Link>
      </div>
    )
  }
}

export default TimePicker