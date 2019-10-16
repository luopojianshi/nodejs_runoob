const mysql = require('mysql')

let connection = mysql.createConnection({
	host:		'localhost',
	user:		'root',
	password:	'123456',
	port:		'3306',
	database:	'test'
})
connection.connect()

const addSql = 'INSERT INTO websites(Id, name, url, alexa, country) VALUES(0, ?, ?, ?, ?)';
const addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
// 增
connection.query(addSql, addSqlParams, (err, result) => {
	if (err) {
		console.log('[INSERT ERROR] - ', err.message)
		return
	}

	console.log('------------ INSERT ------------')
	// console.log('INSERT ID: ', result.insertId)
	console.log('INSERT ID: ', result)
	console.log('--------------------------------')
})

connection.end()

