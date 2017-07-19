DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;

\c bookstore;

CREATE TABLE book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  genre VARCHAR(100)
);

CREATE TABLE author (
  author_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100)
);

CREATE TABLE book_author (
  book_id INTEGER REFERENCES book(book_id),
  author_id INTEGER REFERENCES author(author_id),
  PRIMARY KEY (book_id, author_id)
);
