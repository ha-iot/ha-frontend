import React from 'react'
import styled, {keyframes} from 'styled-components'

const _fontColor = '#666'
const _rotationKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  height: 14em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled.i`
  font-size: 8em;
  animation: ${_rotationKeyframe} .8s linear infinite;
  animation-timing-function: ease;
  color: ${_fontColor};
`

const Span = styled.span`
  color: ${_fontColor};
`

export default class NoLamps extends React.Component {
  render() {
    return (
      <Wrapper>
        <Icon className="material-icons">refresh</Icon>
        <Span>Aguardando dados...</Span>
      </Wrapper>
    )
  }
}
