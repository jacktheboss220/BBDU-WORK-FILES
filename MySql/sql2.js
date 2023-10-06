const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'test_DB',
});

// connection.query(
// 	`CREATE TABLE students(
// 		id INT,
// 		name VARCHAR(100),
// 		age INT,
// 		PRIMARY KEY (id),
// 		couse VARCHAR(100)
// 		)
// `,
// 	(err, results, fields) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(results);
// 			console.log(fields);
// 		}
// 		connection.close();
// 	}
// );

// connection.query(
// 	`
// 	CREATE TABLE IF NOT EXISTS subjects(
// 		id INT,
// 		name VARCHAR(100),
// 		PRIMARY KEY (id)
// 		)
// `,
// 	(err, results, fields) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(results);
// 			console.log(fields);
// 		}
// 	}
// );

// connection.query(
// 	`INSERT INTO students (id, name, age, couse) VALUE
// 	 (10,'Suresh',23,'MCA'),
// 	 (11,'Ramesh',25,'MCA'),
// 	 (12,'Mukesh',22,'MCA'),
// 	 (13,'Rajesh',21,'MCA'),
// 	 (14,'Rakesh',23,'MCA'),
// 	 (15,'Naresh',22,'MCA'),
// 	 (16,'Mahesh',24,'MCA'),
// 	 (17,'Rajesh',25,'MCA'),
// 	 (18,'Rakesh',23,'MCA'),
// 	 (19,'Naresh',22,'MCA'),
// 	 (20,'Mahesh',24,'MCA')
// `,
// 	(err, results, fields) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(results);
// 			console.log(fields);
// 		}
// 		connection.close();
// 	}
// );

// connection.query(
// 	`
// DELETE FROM students WHERE id = 2
// `,
// 	(err, results, fields) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(results);
// 			console.log(fields);
// 		}
// 		connection.close();
// 	}
// );

connection.query(
	`
UPDATE students SET name = 'New Name' WHERE id = 1
`,
	(err, results, fields) => {
		if (err) {
			console.log(err);
		} else {
			console.log(results);
			console.log(fields);
		}
		connection.close();
	}
);
