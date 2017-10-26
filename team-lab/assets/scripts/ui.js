'use strict'

const showBooksTemplate = require('./templates/lab.handlebars')

const getBooksSuccess = function (data) {
  const showPlaysHtml = showBooksTemplate({ books: data.books })
  $('#displayData').html(showPlaysHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  showBooksTemplate,
  getBooksSuccess,
  failure
}
