import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FloatingActionButton} from 'material-ui'

const BORDER_DISTANCE = '2em'

class FloatingLinkButton extends React.Component {
  render() {
    const Icon = this.props.icon
    return (
      <Link to={this.props.to} className={this.props.className}>
        <FloatingActionButton secondary={true}>
          <Icon/>
        </FloatingActionButton>
      </Link>
    )
  }
}

export default styled(FloatingLinkButton)`
    left: ${BORDER_DISTANCE};
    bottom: ${BORDER_DISTANCE};
    display: block;
    position: absolute;
`
