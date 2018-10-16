import React, { Component } from 'react';
import Day from './Day';

class DayPicker extends Component {
  render() {
    return (
      <div className="day-container">
        <Day day="Mon" date="Sept 15"/>
        <Day day="Tue" date="Sept 16"/>
        <Day day="Wed" date="Sept 17"/>
        <Day day="Thu" date="Sept 18"/>
        <Day day="Fri" date="Sept 19"/>
      </div>
    )
  }
}

export default DayPicker;