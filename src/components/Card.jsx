import React from 'react'
import PropTypes from 'prop-types'
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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: ${BORDER_STYLE};
  border-right: ${BORDER_STYLE};
  border-left: ${BORDER_STYLE};
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
`

class Card extends React.Component {
  render() {
    const data = [<span key={0}>{this.props.primaryData}</span>]
    if (this.props.secondaryData) {
      data.push(<span key={1}>{this.props.secondaryData}</span>)
    }
    return (
      <Wrapper>
        <Label>{this.props.label}</Label>
        <Data>{data}</Data>
      </Wrapper>
    )
  }
}

Card.propTypes = {
  primaryData: PropTypes.string.isRequired,
  secondaryData: PropTypes.string,
}

export default Card
