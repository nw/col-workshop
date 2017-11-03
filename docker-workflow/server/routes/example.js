
'use strict'

const router = require('express').Router()
  , methodOverride = require('method-override')
  , bodyParser = require('body-parser')

module.exports = function (app) {

  router
    .use(methodOverride('X-HTTP-Method-Override'))
    .use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
    .use(bodyParser.json()) // parse application/json

  router.post('/post', function (req, res) {
    res.status(200).send(res.body)
  })

  router.get('/random', function (req, res) {
    res.status(200).send('' + Math.random())
  })

  // make sure we return the router
  return router

}
