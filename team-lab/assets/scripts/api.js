'use strict'

const config = require('./config.js')

const getBooks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/books'
  })
}

module.exports = {
  getBooks
}
