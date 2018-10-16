import React, { Component } from 'react';

class Day extends Component {
  render() {
    return (
      <div className="day">
        <p className="day-text">{ this.props.day }</p>
        <p className="day-date">{ this.props.date }</p>
      </div>
    )
  }
}

export default Day;