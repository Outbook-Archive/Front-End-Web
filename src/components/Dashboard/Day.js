import React, {Component} from 'react';
import TimePicker from './TimePicker';


class Day extends Component {

  constructor(props) {
    super(props);

    this.state = {
      renderDayView: false
    };

    this.renderTimePicker = this.renderTimePicker.bind(this);
    this.handleRenderTime = this.handleRenderTime.bind(this);
  }

  handleRenderTime() {
    this.setState({renderTimePicker: true})
  }

  renderTimePicker() {
    if (this.state.renderTimePicker) {
      return (
        <TimePicker day={this.props.day} date={this.props.date}/>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div onClick={this.handleRenderTime} className="day">
        <p className="day-text">{this.props.day}</p>
        <p className="day-date">{this.props.date}</p>
        {this.renderTimePicker()}

      </div>
    )
  }
}

export default Day;
