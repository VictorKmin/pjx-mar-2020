SELECT * FROM students;

SELECT name, age FROM students;

SELECT * FROM students WHERE name = 'romAn';

SELECT * FROM students WHERE name LIKE '%n';
SELECT * FROM students WHERE name LIKE '%o%';
SELECT * FROM students WHERE name LIKE '__a%';
SELECT * FROM students WHERE name LIKE '%t__';

SELECT * FROM students WHERE LENGTH(name) = 4;

SELECT * FROM students WHERE gender = 'male' ORDER BY age DESC;

SELECT * FROM students LIMIT 5 OFFSET 10;

SELECT * FROM students ORDER BY age DESC LIMIT 3;


SELECT * FROM students WHERE age != 18;

SELECT * FROM students WHERE age > 18 AND name LIKE 'o%';

SELECT * FROM students WHERE age > 18 OR name LIKE 'o%';

SELECT * FROM students WHERE age BETWEEN 20 AND 30;

SELECT * FROM students WHERE age BETWEEN 20 AND 30 AND name LIKE 'o%';


# AGGREGATE FUNCTIONS

SELECT MAX(age) FROM students;

SELECT MIN(age) FROM students;

SELECT MAX(age) AS maxAge,
       MIN(age) AS minAge
FROM students;

SELECT AVG(rating) FROM ratings WHERE student_id = 5;

SELECT COUNT(id) AS countOfUsers FROM students WHERE age < 18;

SELECT SUM(age) FROM students;


UPDATE students SET name = 'DIMAS' WHERE age = 18;

UPDATE students SET age = 20 WHERE age > 40;

DELETE FROM students WHERE age = 20;

UPDATE students SET name = NULL where age = 20;

SELECT * FROM students WHERE name IS NOT NULL;


SHOW TABLES;
