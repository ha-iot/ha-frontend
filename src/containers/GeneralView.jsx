import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {BrightnessHigh as MuiBrightnessHigh, BrightnessLow as MuiBrightnessLow} from '@material-ui/icons'
import {IconButton, Button as MuiButton} from '@material-ui/core'

import socket from '../socket'
import {forDesktop, forMobile} from '../utils'

const yellow = '#d8d800'
const generalMargin = '1em'

const BrightnessHigh = styled(MuiBrightnessHigh)`
  color: ${yellow};
`

const BrightnessLow = styled(MuiBrightnessLow)`
  color: grey;
`

const Root = styled.div`
  margin: ${generalMargin};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LampsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${forDesktop} {
    width: 40%;  
  }
  ${forMobile} {
    width: 100%;  
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${forDesktop} {
    width: 40%;  
  }
  ${forMobile} {
    width: 100%;  
  }
`

const Button = styled(MuiButton)`
  width: 100%;
  height: 4em;
  margin-top: ${generalMargin} !important;

  button div div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

function Lamps(props) {
  const lamps = props.lamps.map((lamp, i) => {
    return (
      <IconButton key={i}>
        {lamp.isOn ? <BrightnessHigh/> : <BrightnessLow/>}
      </IconButton>
    )
  })

  return <LampsWrapper>{lamps}</LampsWrapper>
}

function Buttons() {
  const actionButtons = [
    {action: 'toggle', label: 'Alternar lâmpadas'},
    {action: 'on', label: 'Ligar lâmpadas'},
    {action: 'off', label: 'Desligar lâmpadas'},
  ]

  const actionFactory = action => () => {
    socket.triggerActionOnLamp({target: 'all', action})
  }

  const buttons = actionButtons.map(({action, label}, i) => (
    <Button variant="contained" key={i} onClick={actionFactory(action)} color="primary">
      {label}
    </Button>
  ))

  return <ButtonsWrapper>{buttons}</ButtonsWrapper>
}

function GeneralView(props) {
  return (
    <Root>
      <Lamps lamps={props.lamps}/>
      <Buttons/>
    </Root>
  )
}

GeneralView.propTypes = {
  lamps: PropTypes.arrayOf(
    PropTypes.shape({
      isOn: PropTypes.bool.isRequired,
    })
  ).isRequired
}

export default GeneralView
