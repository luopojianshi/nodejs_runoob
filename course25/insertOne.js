const url = 'mongodb://localhost:27017/'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	let dbo = db.db('runoob')
	const myobj = { name: '菜鸟教程', url: 'www.runoob' }
	dbo.collection('site').insertOne(myobj, (err, res) => {
		if (err) throw err
		console.log('文档插入成功')
		db.close()
	})
})

