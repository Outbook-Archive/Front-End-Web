import React, { Component } from 'react';
import Day from './Day';

class DayPicker extends Component {
  render() {
    return (
      <div className="day-container">
        <Day day="Mon" date="Sept 15" onClick={this.props.handleRenderTime}/>
        <Day day="Tue" date="Sept 16" onClick={this.props.handleRenderTime}/>
        <Day day="Wed" date="Sept 17" onClick={this.props.handleRenderTime}/>
        <Day day="Thu" date="Sept 18" onClick={this.props.handleRenderTime}/>
        <Day day="Fri" date="Sept 19" onClick={this.props.handleRenderTime}/>
      </div>
    )
  }
}

export default DayPicker;