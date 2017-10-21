import React from 'react'
import {mount} from 'enzyme'

import Card from './Card'

it('renders without crashing', () => {
  mount(<Card primaryData="Primary Info" secondaryData="Secondary Info" label="Label"/>)
})
