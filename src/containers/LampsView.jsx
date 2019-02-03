import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Info as InfoIcon} from '@material-ui/icons'
import {Button as MuiButton, IconButton as MuiIconButton} from '@material-ui/core'

import socket from '../socket'
import {forDesktop, forMobile} from '../utils'

const height = '4em'

const Root = styled.div`
  display: flex;
  min-height: 22em;
  margin-top: 1em;
  ${forMobile} {
    justify-content: space-around;
  }
  ${forDesktop} {
    justify-content: center;
  }
`

const IconButton = styled(MuiIconButton)`
  height: 4em;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${forMobile} {
    width: 70%;
  }
  ${forDesktop} {
    width: 30%;
  }
`

const Button = styled(MuiButton)`
  width: 100%;

  button div div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: rgba(255, 255, 255, .87) !important;
    }
  }
`

const LampsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${forMobile} {
    width: 20%;
  }
  ${forDesktop} {
    width: 10%;
  }
`

function Buttons(props) {
  const buttons = props.lamps.map((lamp, i) => {
    const label = `${lamp.isOn ? 'Desligar' : 'Ligar'} ${lamp.label}`
    return (
      <Button key={i}
              style={{height}}
              variant="contained"
              color={lamp.isOn ? 'primary' : undefined}
              onClick={getLampAction(lamp.number)}>
        {label}
      </Button>
    )
  })

  return <ButtonsWrapper>{buttons}</ButtonsWrapper>
}

function Lamps(props) {
  const lamps = props.lamps.map((lamp, i) => (
    <Link key={i} to={'/lamps/' + lamp.number}>
      <IconButton color={lamp.isOn ? 'primary' : undefined}>
        <InfoIcon/>
      </IconButton>
    </Link>
  ))

  return <LampsWrapper>{lamps}</LampsWrapper>
}

const ThemedLamps = Lamps

function LampsView(props) {
  const {lamps} = props
  return (
    <Root>
      <Buttons lamps={lamps}/>
      <ThemedLamps lamps={lamps}/>
    </Root>
  )
}

export default LampsView

function getLampAction(lampNumber) {
  return () => {
    socket.emit('client/lampsAction', {target: lampNumber, action: 'toggle'})
  }
}
