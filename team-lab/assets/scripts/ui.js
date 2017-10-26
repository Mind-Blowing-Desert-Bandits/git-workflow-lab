'use strict'

<<<<<<< HEAD
const showBooksTemplate = require('../templates/lab.handlebars')
=======
const showBooksTemplate = require('../templates/book-listing.handlebars')
>>>>>>> Added initial ui

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
