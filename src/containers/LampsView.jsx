import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {IconButton, RaisedButton} from 'material-ui'
import {muiThemeable} from "material-ui/styles"

import socket from '../socket'
import {forDesktop, forMobile} from '../utils'

const height = '4em'
const greyColor = 'grey'

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

const Button = styled(RaisedButton)`
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
    return <Button key={i} primary={lamp.isOn} backgroundColor={greyColor} onClick={lampActionFactory(lamp.number)} label={label} style={{height}}/>
  })

  return <ButtonsWrapper>{buttons}</ButtonsWrapper>
}

function Lamps(props) {
  const lamps = props.lamps.map((lamp, i) => {
    const color = lamp.isOn ? props.muiTheme.palette.primary1Color : greyColor
    const iconStyle = {height, color}
    return (
      <Link key={i} to={'/lamps/' + lamp.number}>
        <IconButton iconClassName="material-icons" iconStyle={iconStyle}>info</IconButton>
      </Link>
    )
  })

  return <LampsWrapper>{lamps}</LampsWrapper>
}

const ThemedLamps = muiThemeable()(Lamps)

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

function lampActionFactory(lampNumber) {
  return () => {
    socket.emit('client/lampsAction', {target: lampNumber, action: 'toggle'})
  }
}
