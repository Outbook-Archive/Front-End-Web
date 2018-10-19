import React, {Component} from 'react';
import Day from './Day';


class DayPicker extends Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
  }

  click = () => {
    this.props.viewSwitcher()
  }

  render() {
    return (

      <div className="day-container">
        <Day day="Mon" date="Sept 15" viewSwitcher={ this.props.viewSwitcher}/>
        <Day day="Tue" date="Sept 16" viewSwitcher={ this.props.viewSwitcher}/>
        <Day day="Wed" date="Sept 17" viewSwitcher={ this.props.viewSwitcher}/>
        <Day day="Thu" date="Sept 18" viewSwitcher={ this.props.viewSwitcher}/>
        <Day day="Fri" date="Sept 19" viewSwitcher={ this.props.viewSwitcher}/>
      </div>
    )
  }
}

export default DayPicker;