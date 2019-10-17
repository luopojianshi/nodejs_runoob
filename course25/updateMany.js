const url = 'mongodb://localhost:27017/'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	let dbo = db.db('runoob')
	const whereStr = { type: 'en' }	// 查询条件
	const updateStr = {$set: { url: 'https://www.runoob.com' }}
	dbo.collection('site').updateMany(whereStr, updateStr, (err, res) => {
		if (err) throw err
		console.log(res.result.nModified + ' 条文档被更新')
		db.close()
	})
})

