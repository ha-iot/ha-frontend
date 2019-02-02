import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import {NavigationArrowBack} from 'material-ui/svg-icons'

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
    (days >= 1 ? `${days} dia${_getPlural(days)}, ` : '') +
    (hours >= 1 ? `${hours} hora${_getPlural(hours)}, ` : '') +
    (minutes >= 1 ? `${minutes} minuto${_getPlural(minutes)} ${seconds >= 1 ? 'e ' : ''}` : '') +
    (seconds >= 1 || !minutes ? `${seconds} segundo${_getPlural(seconds)}` : '')
  )

  function _getPlural(value, plural) {
    return value !== 1 ? plural || 's' : ''
  }
}

class LampData extends React.Component {
  constructor(props) {
    super(props)

    /**
     * This "find" must be done because a new lamp list is sent, not an object
     * @returns {{isOn, number, upTime, label}}
     */
    this.getLamp = () => this.props.lamps.find(({number}) => number === +this.props.match.params.lampNumber)
    this.state = {
      lamp: null,
      datetime: '',
      datetimeInfo: '-',
      intervalUpdateId: null,
    }
  }

  componentWillMount() {
    this._updateState()
  }

  componentDidMount() {
    this._updateState()
    const intervalUpdateId = setInterval(this._updateState.bind(this), 1000)
    this.setState({intervalUpdateId})
  }

  _updateState() {
    const state = {lamp: this.getLamp()}
    if (state.lamp && state.lamp.isOn) {
      state.datetime = new Date(state.lamp.upTime).toISOString()
        .replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')
        .replace('T', ' ')
        .replace(/:\d{2}\..+/, '')
      state.datetimeInfo = _getDateTimeDiff(state.lamp.upTime)
    } else {
      state.datetime = ''
      state.datetimeInfo = '-'
    }
    this.setState(state)
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
                <Card label="Tempo ligado" primaryData={this.state.datetimeInfo} secondaryData={this.state.datetime}/>
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
      lampNumber: PropTypes.string,
    }),
  }),
}

export default LampData
