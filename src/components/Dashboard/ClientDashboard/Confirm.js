import React, { Component } from 'react'

class Confirm extends Component {
  render() {
    return(
      <div className={"confirmation-container"}>
        <p className={"confirm-day"}>{ this.props.day.day }</p>
        <p className={"confirm-date"}>{ this.props.day.date }</p>
        <p className={"confirm-time"}>{ this.props.time }</p>
        <button className={'confirm-select'}>select</button>
      </div>
    )
  }
}

export default Confirm;