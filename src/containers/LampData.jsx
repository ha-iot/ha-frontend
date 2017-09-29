import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FloatingActionButton} from "material-ui"
import {NavigationArrowBack} from "material-ui/svg-icons/index"

import './LampData.scss'

function _getDateTimeDiff(dateSource) {
  const dateDiff = Math.abs(new Date() - new Date(dateSource))
  let seconds = Math.round(dateDiff / 1000)
  let minutes, hours, days
  if (seconds >= 1) {
    const _minutes = Math.round(seconds / 60)
    if (_minutes >= 1) {
      seconds -= _minutes * 60
      minutes = _minutes
      const _hours = Math.round(minutes / 60)
      if (_hours >= 1) {
        minutes -= _hours * 60
        hours = _hours
        const _days = Math.round(hours / 24)
        if (_days >= 1) {
          hours -= _days * 24
          days = _days
        }
      }
    }
  }
  return `${days ? `${days} days, ` : ''}${hours ? `${hours} hours, ` : ''}${minutes ? `${minutes} minutes and ` : ''}${seconds} seconds`
}

function _getDateTimeInfo() {
  const lamp = this.props.lamps.find(({number}) => number === +this.props.match.params.lampNumber)
  // Check if "lamp" is valid because the app might open in this page
  // and might not been retrieved from socket yet.
  return lamp ? `Lamp ${lamp.number} ${lamp.isOn ? 'on for ' + _getDateTimeDiff(lamp.onSince) : 'turned off'}.` : 'Waiting for data...'
}

class LampData extends React.Component {
  constructor(props) {
    super(props)

    this.getDateTimeInfo = _getDateTimeInfo.bind(this)
    this.state = {
      datetimeInfo: 'Waiting data...',
      intervalUpdateId: null
    }
  }

  componentWillMount() {
    this.setState({
      datetimeInfo: this.getDateTimeInfo()
    })
  }

  componentDidMount() {
    const intervalUpdateId = setInterval(() => {
      this.setState({
        datetimeInfo: this.getDateTimeInfo()
      })
    }, 1000)
    this.setState({intervalUpdateId})
  }

  componentWillUnmount() {
    this.state.intervalUpdateId && clearInterval(this.state.intervalUpdateId)
  }

  render() {
    return (
      <div>
        {this.state.datetimeInfo}
        <Link to="/home" className="back_button">
          <FloatingActionButton secondary={true}>
            <NavigationArrowBack/>
          </FloatingActionButton>
        </Link>
      </div>
    )
  }
}

LampData.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      lampNumber: PropTypes.string
    })
  })
}

export default LampData
