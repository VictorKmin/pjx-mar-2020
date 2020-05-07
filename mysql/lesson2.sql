# SELECT p.name  AS patName,
#        p.phone AS patPhone,
#        d.name  AS docName
# FROM doctor_patient d_p
#          JOIN doctors d ON d_p.doctor_id = d.id
#          JOIN patient p ON d_p.patient_id = p.id;


SELECT *
FROM students
WHERE age IN (20, 30, 40);


SELECT COUNT(id), gender
FROM students
GROUP BY gender;

SELECT COUNT(id) as count,
       age
FROM students
GROUP BY age
ORDER BY count;



SELECT students.name,
       students.age,
       lesson.label,
       lesson.date,
       lesson.student_count,
       ratings.rating
FROM ratings
         JOIN lesson ON ratings.lesson_id = lesson.id
         JOIN students ON students.id = ratings.student_id
WHERE ratings.rating = 5;



SELECT COUNT(r.id) as IMolodec,
       l.label,
       l.date,
       l.id
FROM ratings r
         JOIN lesson l ON r.lesson_id = l.id
WHERE r.rating = 5
GROUP BY l.id;


SELECT CONCAT(name,' ', age) AS nameAge FROM students;


SELECT DISTINCT(label) FROM lesson;

SELECT DISTINCT(name) FROM students;

SELECT COUNT(id), name FROM students GROUP BY name;



SELECT * FROM users RIGHT JOIN depts d ON users.dept_id = d.id;

SELECT * FROM users LEFT JOIN depts d ON users.dept_id = d.id;
