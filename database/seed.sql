\c bookstore

CREATE TEMPORARY TABLE temp_table (
  title VARCHAR(100),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  genre VARCHAR(100)
);

COPY temp_table(title,last_name,first_name, genre)
FROM '/Users/koppel/Documents/LG/lgProjects/Simple-Book-Store/database/books.csv' DELIMITER ',' CSV HEADER;

INSERT INTO book(title, genre) SELECT title,genre FROM temp_table;

INSERT INTO author(first_name, last_name) SELECT first_name, last_name FROM temp_table;

DROP TABLE temp_table;
