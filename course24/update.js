const mysql = require('mysql')

let connection = mysql.createConnection({
	host:		'localhost',
	user:		'root',
	password:	'123456',
	port:		'3306',
	database:	'test'
})
connection.connect()

const modSql = 'UPDATE websites SET name = ?, url = ? WHERE Id = ?';
const modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6]
// 改
connection.query(modSql, modSqlParams, (err, result) => {
	if (err) {
		console.log('[UPDATE ERROR] - ', err.message)
		return
	}

	console.log('------------ UPDATA -----------')
	console.log('UPDATA affectedRows: ', result.affectedRows)
	console.log('-------------------------------')
})

connection.end()

