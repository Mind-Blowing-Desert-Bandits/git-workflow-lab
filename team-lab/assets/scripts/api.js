'use strict'

const config = require('./config.js')

const getBooks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/books'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  getBooks
}
