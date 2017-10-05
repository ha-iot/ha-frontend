import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import {NavigationArrowBack} from "material-ui/svg-icons/index"

import NoData from './NoData'
import Card from '../components/Card'
import FloatingLinkButton from '../components/FloatingLinkButton'

const Wrapper = styled.div`
  color: #666;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

/**
 * @returns {string}
 * @private
 */
function _getDateTimeInfo() {
  const lamp = this.state.lamp
  // Check if "lamp" is valid because the app might open in this page
  // and might not been retrieved from socket yet.
  return lamp ? lamp.isOn ? _getDateTimeDiff(lamp.upTime) : '-' : ''
}

class LampData extends React.Component {
  constructor(props) {
    super(props)

    /**
     * This "find" must be done because a new lamp list is sent, not an object
     * @returns {{isOn, number, upTime, label}}
     */
    this.getLamp = () => this.props.lamps.find(({number}) => number === +this.props.match.params.lampNumber)
    this.getDateTimeInfo = _getDateTimeInfo.bind(this)
    this.state = {
      lamp: null,
      datetimeInfo: '',
      intervalUpdateId: null
    }
  }

  componentWillMount() {
    this.setState({
      lamp: this.getLamp(),
      datetimeInfo: this.getDateTimeInfo()
    })
  }

  componentDidMount() {
    _updateState.call(this)
    const intervalUpdateId = setInterval(_updateState.bind(this), 1000)
    this.setState({intervalUpdateId})

    function _updateState() {
      this.setState({
        lamp: this.getLamp(),
        datetimeInfo: this.getDateTimeInfo()
      })
    }
  }

  componentWillUnmount() {
    this.state.intervalUpdateId && clearInterval(this.state.intervalUpdateId)
  }

  render() {
    return (
      <Wrapper>
        {
          this.props.lamps.raw ?
            <NoData/>
            :
            this.state.lamp ?
              <Content>
                <h1>{this.state.lamp.label}</h1>
                <Card label="Tempo ligado" data={this.state.datetimeInfo}/>
              </Content>
              :
              <Redirect to="/home"/>
        }
        <FloatingLinkButton to="/home" icon={NavigationArrowBack}/>
      </Wrapper>
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
