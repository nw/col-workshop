'use strict'

const path = require('path')
const example_endpoints = require('./example')
const serveStatic = require('serve-static')
const errors = require('../lib/errors')

module.exports = function routes (app) {

  app.get('/', function (req, res) {
      return res.status(200).send("Hello")
  })

  app.get('/unauthorized', function (req, res, next) {
    return next(new errors.Unauthorized());
  })

  app.get('/notfound', function (req, res, next) {
    return next(new errors.NotFound())
  })

  app.use(example_endpoints(app))

  // host `public` dir as static files.
  // `index.html` is a static page (default url)
  app.use(serveStatic(path.join(__dirname, '/../public'), {
    maxAge: app.enabled('debug') ? 0 : 100000000
  }))

}
