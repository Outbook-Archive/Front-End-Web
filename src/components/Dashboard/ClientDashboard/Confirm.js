import React, { Component } from 'react'

class Confirm extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.time)
    return(
      <div>
        <h1>Thank you for confirming your interview</h1>
        { this.props.day.day }
        { this.props.day.date }
        { this.props.time }
      </div>
    )
  }
}

export default Confirm;