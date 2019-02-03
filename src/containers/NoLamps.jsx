import React from 'react'
import styled from 'styled-components'
import {SentimentDissatisfied} from '@material-ui/icons'

const fontColor = '#666'

const Wrapper = styled.div`
  height: 14em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Icon = styled(SentimentDissatisfied)`
  font-size: 8em;
  color: ${fontColor};
`

const Span = styled.span`
  color: ${fontColor};
`

function NoLamps() {
  return (
    <Wrapper>
      <Icon/>
      <Span>Não há lâmpadas conectadas.</Span>
    </Wrapper>
  )
}

export default NoLamps
