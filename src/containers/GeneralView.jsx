import React from 'react'
import styled from 'styled-components'
import {IconButton, RaisedButton} from 'material-ui'

import socket from '../socket'
import {forDesktop, forMobile} from '../utils'

const yellow = '#d8d800'
const buttonHeight = '4em'
const generalMargin = '1em'

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

const Button = styled(RaisedButton)`
  width: 100%;
  margin-top: ${generalMargin} !important;

  button div div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

function Lamps(props) {
  const lamps = props.lamps.map((lamp, i) => {
    let [iconClass, color] = lamp.isOn ? ['brightness_high', yellow] : ['brightness_low', 'grey']
    return (
      <IconButton key={i} iconClassName='material-icons' iconStyle={{color, height: buttonHeight}}>
        {iconClass}
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
    socket.emit('client/lampsAction', {target: 'all', action})
  }

  const buttons = actionButtons.map(({action, label}, i) =>
    <Button key={i} onClick={actionFactory(action)} label={label} primary={true} style={{height: buttonHeight}}/>,
  )

  return <ButtonsWrapper>{buttons}</ButtonsWrapper>
}

function LampsView(props) {
  return (
    <Root>
      <Lamps lamps={props.lamps}/>
      <Buttons lamps={props.lamps}/>
    </Root>
  )
}

export default LampsView
