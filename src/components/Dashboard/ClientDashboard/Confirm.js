import React, { Component } from 'react'
import './Confirm.css'

class Confirm extends Component {
  render() {
    return(
      <div className={'confirmation-container'}>
        <div className={"confirm-selected-time"}>
          <p className={"confirm-day"}>{ this.props.day.day }</p>
          <p className={"confirm-date"}>{ this.props.day.date }</p>
          <p className={"confirm-time"}>{ this.props.time }</p>
        </div>
        <div className={'confirm-btns'}>
          <button className={'confirm-btn btn-grey'} onClick={ this.props.backButton }>change</button>
          <button className={'confirm-btn btn-blue'}>confirm</button>
        </div>
      </div>
    )
  }
}

export default Confirm;
