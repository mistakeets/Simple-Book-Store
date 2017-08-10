const db = require('./db')

const addBook = ({ title, firstName, lastName, genre }) => {
  return db.tx(t => {
      return t.batch([
        t.one('INSERT INTO book(title, genre) VALUES($1, $2) RETURNING id', [title, genre]),
        t.one('INSERT INTO author(first_name, last_name) VALUES($1, $2) RETURNING id', [firstName, lastName])
      ])
    })
    .then(bookData => {
      const bookID = bookData[0].id
      const authorID = bookData[1].id
      return db.none('INSERT INTO book_author(book_id, author_id) VALUES ($1, $2)', [bookID, authorID])
    })
    .catch(error => {
      console.log('ERROR:', error)
    })
}

const getBook = (id) => {
  return db.one('SELECT * FROM book WHERE id=$1', [id])
}

const getAllBooks = () => {
  return db.query('SELECT * FROM book', [])
}

const findByTitle = (title) => {
  return db.query('SELECT * FROM book WHERE lower(title) LIKE $1', [`%${title.toLowerCase()}%`])
}

module.exports = {
  addBook,
  getBook,
  getAllBooks,
  findByTitle
}
