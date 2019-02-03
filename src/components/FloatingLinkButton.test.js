import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {ArrowBack} from '@material-ui/icons'

import FloatingLinkButton from './FloatingLinkButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <HashRouter>
      <FloatingLinkButton icon={ArrowBack} to="/some/path/"/>
    </HashRouter>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
