import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FloatingActionButton} from "material-ui"
import {NavigationArrowBack} from "material-ui/svg-icons/index"

import './LampData.scss'

const DATA_WAIT_MESSAGE = 'Esperando dados...'

function _getDateTimeDiff(dateSource) {
  const secondsDiff = new Date().getTime() - new Date(dateSource).getTime()
  const _seconds = secondsDiff / 1000
  let seconds = parseInt(_seconds, 10)
  let minutes, hours, days
  if (seconds >= 1) {
    let _minutes = parseInt(_seconds / 60, 10)
    if (_minutes >= 1) {
      seconds -= _minutes * 60
      minutes = _minutes
      const _hours = parseInt(_minutes / 60, 10)
      if (_hours >= 1) {
        minutes -= _hours * 60
        hours = _hours
        const _days = parseInt(_hours / 24, 10)
        if (_days >= 1) {
          hours -= _days * 24
          days = _days
        }
      }
    }
  }
  return (
    (days ? `${days} dia${_getPlural(days)}, ` : '') +
    (hours ? `${hours} hora${_getPlural(hours)}, ` : '') +
    (minutes ? `${minutes} minuto${_getPlural(minutes)} e ` : '') +
    `${seconds} segundo${_getPlural(seconds)}`
  )
  function _getPlural(value, plural) {
    return value !== 1 ? plural || 's' : ''
  }
}

function _getDateTimeInfo() {
  /**
   * This "find" must be done because a new lamp list is sent, not an object
   * @type {{isOn, number, upTime}}
   */
  const lamp = this.props.lamps.find(({number}) => number === +this.props.match.params.lampNumber)
  // Check if "lamp" is valid because the app might open in this page
  // and might not been retrieved from socket yet.
  return lamp ? (lamp.isOn ? 'Ligada há ' + _getDateTimeDiff(lamp.upTime) : 'Desligada') + '.' : DATA_WAIT_MESSAGE
}

class LampData extends React.Component {
  constructor(props) {
    super(props)

    this.getDateTimeInfo = _getDateTimeInfo.bind(this)
    this.state = {
      datetimeInfo: DATA_WAIT_MESSAGE,
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
