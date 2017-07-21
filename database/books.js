const db = require('./db')

const addBook = (title, firstName, lastName, genre) => {
  return db.tx(t => {
      return t.batch([
        t.one('INSERT INTO book(title, genre) VALUES($1, $2) RETURNING id', [title, genre]),
        t.one('INSERT INTO author(first_name, last_name) VALUES($1, $2) RETURNING id', [firstName, lastName])
      ])
    })
    .then(data => {
      console.log('DO WE HAVE DATA??', data)
      return db.oneOrNone('INSERT INTO book_author(book_id, author_id) VALUES (data[0].id, data[1].id)')
    })
}



module.exports = {
  addBook
}
