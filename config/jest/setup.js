const Adapter = require('enzyme-adapter-react-16')
// React 16 Enzyme adapter
require('enzyme').configure({adapter: new Adapter()})

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
