\c bookstore

CREATE TEMPORARY TABLE temp_table (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  genre VARCHAR(100)
);

COPY temp_table(title,last_name,first_name, genre)
FROM '/Users/koppel/Documents/LG/lgProjects/Simple-Book-Store/database/books.csv' DELIMITER ',' CSV HEADER;

-- INSERT INTO book(title, genre) SELECT title,genre FROM temp_table;

-- INSERT INTO author(first_name, last_name) SELECT first_name, last_name FROM temp_table GROUP BY first_name, last_name;

-- INSERT INTO book_author(book_id, author_id) SELECT * FROM book b inner join temp_table t on b.title = tt.title inner join author a on a.first_name = tt.author;

-- DROP TABLE temp_table;

CREATE FUNCTION pg_temp.foo() returns void AS $$
DECLARE
  temp_table_row RECORD;
  a_book RECORD;
  a_author RECORD;
  existing_author RECORD;
BEGIN
 FOR temp_table_row IN select * from temp_table LOOP   
   INSERT INTO book(title, genre) values(temp_table_row.title, temp_table_row.genre) returning * INTO a_book;
   SELECT * INTO a_author from author where first_name = temp_table_row.first_name and last_name = temp_table_row.last_name;
   IF NOT found THEN 
     INSERT INTO author(first_name, last_name) values(temp_table_row.first_name, temp_table_row.last_name) returning * INTO a_author;
   END IF;
   INSERT INTO book_author(book_id, author_id) values(a_book.id, a_author.id);   
 END LOOP;
 return;
END;
$$ LANGUAGE plpgsql;

select pg_temp.foo();

select count(*) from author;
select count(*) from book;
