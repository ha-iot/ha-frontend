require('dotenv').config({silent: true})

const fs = require('fs')
const path = require('path')

const BUILD_PATH = path.join(__dirname, 'build')

if (!fs.existsSync(BUILD_PATH)) {
  console.error('\nThis server is intended to run over a production build. Run "npm run build".\n')
  process.exit(0)
}

const express = require('express')
const app = express()

if (process.env.NODE_ENV === 'production') {
  // References:
  // https://stackoverflow.com/a/31144924/4694834, https://stackoverflow.com/a/39539336/4694834,
  // https://stackoverflow.com/a/32952582/4694834, https://stackoverflow.com/a/19051185/4694834
  app.get('*', (req, res, next) => {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.headers.host + req.url)
    }
    return next()
  })
}

app.use(express.static(BUILD_PATH))

const PORT = +process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}.`)
})
