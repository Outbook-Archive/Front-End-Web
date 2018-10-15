import React, { Component } from 'react';
import Day from './Day';

class DayPicker extends Component {
  render() {
    return (
      <div className="day-container">
        <Day day="Wed" date="Sept 19"/>
        <Day day="Thu" date="Sept 19"/>
        <Day day="Fri" date="Sept 19"/>
        <Day day="Mon" date="Sept 19"/>
        <Day day="Tue" date="Sept 19"/>
      </div>
    )
  }
}

export default DayPicker;