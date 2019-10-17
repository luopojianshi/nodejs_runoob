const url = 'mongodb://localhost:27017/'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	let dbo = db.db('runoob')
	const myobj = [
		{ name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn' },
		{ name: 'Google', url: 'https://www.google.com', type: 'en' },
		{ name: 'Facebook', url: 'https://www.facebook.com', type: 'en' }
	]
	dbo.collection('site').insertMany(myobj, (err, res) => {
		if (err) throw err
		console.log('插入的文档数量为: ' + res.insertedCount)
		db.close()
	})
})
	
