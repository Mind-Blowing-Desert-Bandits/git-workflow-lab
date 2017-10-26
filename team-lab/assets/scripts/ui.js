'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')

const getBooksSuccess = function (data) {
    const showPlaysHtml = showBooksTemplate({ books: data.books })
    $('#displayData').append(showPlaysHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
showBooksTemplate,
getBooksSuccess
}
