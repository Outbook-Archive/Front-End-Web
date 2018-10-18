import React, {Component} from 'react';
import Day from './Day';


class DayPicker extends Component {
  render() {
    return (

      <div className="day-container">
        <Day day="Mon" date="Sept 15" onClick={this.handleRenderTime}/>
        <Day day="Tue" date="Sept 16" onClick={this.handleRenderTime}/>
        <Day day="Wed" date="Sept 17" onClick={this.handleRenderTime}/>
        <Day day="Thu" date="Sept 18" onClick={this.handleRenderTime}/>
        <Day day="Fri" date="Sept 19" onClick={this.handleRenderTime}/>

      </div>
    )
  }
}

export default DayPicker;