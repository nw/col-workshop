'use strict'

var boot = require('./boot')
  , server = require('express')()
  , app = boot(server)

module.exports = app

if (!module.parent) {

  process.addListener('uncaughtException', function (err) {
    console.error('Uncaught exception!')
    console.error(err.stack || err)
    process.exit(1)
  })
  
   process.addListener('unhandledRejection', function (err) {
    console.error('Unhandled Rejection!')
    console.error(err.stack || err)
    process.exit(1)
  })

   process.addListener('multipleResolves', function (err) {
    console.error('Multiple Resolves!')
    console.error(err.stack || err)
    process.exit(1)
  })

  app.listen(app.get('port'), function () {
    console.error('\x1b[32mExample App\x1b[0m running on http://%s:%d',
      this.address().address,
      this.address().port)
  })

}
