import React, { Component } from 'react';

class Time extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="time">
        <p className="time-text">{ this.props.time }</p>
      </div>
    )
  }
}

export default Time;