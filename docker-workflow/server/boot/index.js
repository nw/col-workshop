'use strict'

const errorHandler = require('errorhandler')
const config = require('./config')
const routes = require('../routes')

module.exports = function boot (app) {

  config(app)

  routes(app)

  app.use(errorHandler({
    dumpExceptions: app.enabled('debug'),
    showStack: app.enabled('debug')
  }))

  return app
}
