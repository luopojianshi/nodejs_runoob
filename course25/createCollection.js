const url = 'mongodb://localhost:27017/runoob'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	console.log('数据库已创建')
	let dbase = db.db('runoob')
	dbase.createCollection('site', (err, res) => {
		if (err) throw err
		console.log('创建集合!')
		db.close()
	})
})

