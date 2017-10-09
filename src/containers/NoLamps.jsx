import React from 'react'
import styled from 'styled-components'

const _fontColor = '#666'

const Wrapper = styled.div`
  height: 14em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled.i`
  font-size: 8em;
  color: ${_fontColor};
`

const Span = styled.span`
  color: ${_fontColor};
`

export default class NoLamps extends React.Component {
  render() {
    return (
      <Wrapper>
        <Icon className="material-icons">sentiment_dissatisfied</Icon>
        <Span>Não há lâmpadas conectadas.</Span>
      </Wrapper>
    )
  }
}
