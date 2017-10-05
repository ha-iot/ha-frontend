import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 13pt;
  text-align: center;
  width: 85%;
  display: flex;
  flex-direction: column;
`

const BACKGROUND_COLOR = '#DDD'
const BORDER_RADIUS = '.2em'

const Label = styled.span`
  width: 100%;
  height: 2em;
  background: ${BACKGROUND_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
`

const Data = styled.span`
  min-height: 4em;
  display: flex;
  border-bottom: 1px solid ${BACKGROUND_COLOR};
  border-right: 1px solid ${BACKGROUND_COLOR};
  border-left: 1px solid ${BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
`



class Card extends React.Component {
  render() {
    return (
      <Wrapper>
        <Label>{this.props.label}</Label>
        <Data>{this.props.data}</Data>
      </Wrapper>
    )
  }
}

export default Card
