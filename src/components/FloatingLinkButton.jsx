import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FloatingActionButton} from 'material-ui'
import {Link as RouterLink} from 'react-router-dom'

const borderDistance = '2em'

const Link = styled(RouterLink)`
    display: block;
    position: absolute;
    left: ${borderDistance};
    bottom: ${borderDistance};
`

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

FloatingLinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default FloatingLinkButton
