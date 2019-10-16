const mysql = require('mysql')

let connection = mysql.createConnection({
	host:		'localhost',
	user:		'root',
	password:	'123456',
	port:		'3306',
	database:	'test'
})
connection.connect()

const delSql = 'DELETE FROM websites where id = 6'
// 删
connection.query(delSql, (err, result) => {
	if (err) {
		console.log('[DELETE ERROR] - ', err.message)
		return
	}

	console.log('------------ DELETE ------------')
	console.log('DELETE affectedRows: ', result.affectedRows)
	console.log('--------------------------------')
})

connection.end()

