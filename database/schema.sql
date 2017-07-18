DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;

\c bookstore;

CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100)
);

CREATE TABLE author (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR (50),
  last_name VARCHAR(50)
);

CREATE TABLE genre (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR (50)
);

CREATE TABLE book_author (
  book_id INTEGER REFERENCES book(id),
  author_id INTEGER REFERENCES author(id)
);

ALTER TABLE book ADD COLUMN genre INTEGER REFERENCES genre (id);


