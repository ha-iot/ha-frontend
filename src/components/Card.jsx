import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 13pt;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 85%;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
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

const BORDER_STYLE = '1px solid ' + BACKGROUND_COLOR
const Data = styled.span`
  min-height: 4em;
  display: flex;
  border-bottom: ${BORDER_STYLE};
  border-right: ${BORDER_STYLE};
  border-left: ${BORDER_STYLE};
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
