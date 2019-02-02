import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {forDesktop, forMobile} from '../utils'

const Root = styled.div`
  font-size: 13pt;
  text-align: center;
  display: flex;
  flex-direction: column;
  ${forMobile} {
    width: 85%;
  }
  ${forDesktop} {
    width: 40%;
  }
`

const backgroundColor = '#DDD'
const borderStyle = '1px solid ' + backgroundColor
const borderRadius = '.2em'

const Label = styled.span`
  width: 100%;
  height: 2em;
  background-color: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
`

const Data = styled.span`
  min-height: 4em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-left: ${borderStyle};
  border-right: ${borderStyle};
  border-bottom: ${borderStyle};
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
`

function Card(props) {
  const {label, primaryData, secondaryData} = props
  return (
    <Root>
      <Label>{label}</Label>
      <Data>
        <span>{primaryData}</span>
        {secondaryData ? <span>{secondaryData}</span> : null}
      </Data>
    </Root>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  primaryData: PropTypes.string.isRequired,
  secondaryData: PropTypes.string,
}

export default Card
