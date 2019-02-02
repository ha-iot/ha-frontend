import React from 'react'
import styled from 'styled-components'

const fontColor = '#666'

const Wrapper = styled.div`
  height: 14em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Icon = styled.i`
  font-size: 8em;
  color: ${fontColor};
`

const Span = styled.span`
  color: ${fontColor};
`

function NoLamps() {
  return (
    <Wrapper>
      <Icon className="material-icons">sentiment_dissatisfied</Icon>
      <Span>Não há lâmpadas conectadas.</Span>
    </Wrapper>
  )
}

export default NoLamps
