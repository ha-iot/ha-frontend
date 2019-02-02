import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FloatingActionButton} from 'material-ui'

const borderDistance = '2em'

function FloatingLinkButton(props) {
  const {icon: Icon, to, className} = props
  return (
    <Link to={to} className={className}>
      <FloatingActionButton secondary={true}>
        <Icon/>
      </FloatingActionButton>
    </Link>
  )
}

export default styled(FloatingLinkButton)`
    display: block;
    position: absolute;
    left: ${borderDistance};
    bottom: ${borderDistance};
`
