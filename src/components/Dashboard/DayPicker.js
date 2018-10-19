import React, {Component} from 'react';
import Day from './Day';

import { connect } from 'react-redux'
import * as actions from '../../actions'


class DayPicker extends Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
  }

  componentDidMount() {
    this.props.chooseDay();
  }

  click = () => {
    this.props.viewSwitcher()
  }

  render() {
    return (

      <div className="day-container">
        {/* FIXME: makes the date correct */}
        <Day day="Mon" date="Sept 15" viewSwitcher={ this.props.viewSwitcher}/>
        <Day day="Tue" date="Sept 16" viewSwitcher={ this.props.viewSwitcher}/>
        <Day day="Wed" date="Sept 17" viewSwitcher={ this.props.viewSwitcher}/>
        <Day day="Thu" date="Sept 18" viewSwitcher={ this.props.viewSwitcher}/>
        <Day day="Fri" date="Sept 19" viewSwitcher={ this.props.viewSwitcher}/>
      </div>
    )
  }
}

function mapStateToProps({ chooseDay }) {
  return { chooseDay };
}

export default connect(mapStateToProps, actions)(DayPicker);