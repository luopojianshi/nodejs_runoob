const mysql = require('mysql')

let connection = mysql.createConnection({
	host:		'localhost',
	user:		'root',
	password:	'123456',
	port:		'3306',
	database:	'test'
})
connection.connect()

const sql = 'SELECT * FROM websites';
// 查
connection.query(sql, (err, result) => {
	if (err) {
		console.log('[SELECT ERROR] - ', err.message)
		return
	}

	console.log('------------ SELECT ------------')
	console.log(result)
	console.log('--------------------------------')
})

connection.end()

