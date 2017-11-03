
var NotFound = exports.NotFound = function (msg) {
  this.name = 'NotFound'
  this.HTTPcode = 404
  Error.call(this, msg)
  Error.captureStackTrace(this, NotFound)
}

require('util').inherits(NotFound, Error)

var Unauthorized = exports.Unauthorized = function (msg) {
  this.name = 'Unauthorized'
  this.code = 403
  Error.call(this, msg)
  Error.captureStackTrace(this, Unauthorized)
}

require('util').inherits(Unauthorized, Error)
