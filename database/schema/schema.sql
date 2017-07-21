DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;

\c bookstore;

CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  genre VARCHAR(100)
);

CREATE TABLE author (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100)
);

CREATE TABLE book_author (
  book_id INTEGER REFERENCES book(id),
  author_id INTEGER REFERENCES author(id),
  PRIMARY KEY (book_id, author_id)
);
