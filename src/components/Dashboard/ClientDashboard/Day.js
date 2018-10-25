import React, {Component} from 'react';
import TimePicker from './TimePicker';


class Day extends Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
  }

  click = () => {
    this.props.viewSwitcher()
  }


  render() {
    return (
      <div onClick={this.click}  className="day">
        <p className="day-text">{this.props.day}</p>
        <p className="day-date">{this.props.date}</p>
      </div>
    )
  }
}

export default Day;
