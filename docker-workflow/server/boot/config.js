'use strict'

const path = require('path')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const responseTime = require('response-time')

module.exports = function config (app) {

  app.disable('x-powered-by')

  switch (app.get('env')) {
    case 'production':
      app
        .enable('prod')
        .enable('view cache')
        .disable('debug')
        .enable('compress')
        .use(compression())
      break
    default:
      app
        .set('domain', 'http://localhost:3333')
        .enable('dev')
        .enable('debug')
        .disable('compress')
      break
  }

  app
    .set('port', 3333)
    .set('root', path.join(__dirname, '/../'))

    .use(responseTime({ digits: 3 }))
    .use(cookieParser())

  return app
}
