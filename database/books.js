const db = require('./db')

const addBook = (title, firstName, lastName, genre) => {
  return db.tx(t => {
      return t.batch([
        t.one('INSERT INTO book(title, genre) VALUES($1, $2) RETURNING id', [title, genre]),
        t.one('INSERT INTO author(first_name, last_name) VALUES($1, $2) RETURNING id', [firstName, lastName])
      ])
    })
    .then(data => {
      const bookID = data[0].id
      const authorID = data[1].id
      return db.none('INSERT INTO book_author(book_id, author_id) VALUES ($1, $2)', [bookID, authorID])
    })
    .catch(error => {
      console.log('ERROR:', error)
    })
}

module.exports = {
  addBook
}
