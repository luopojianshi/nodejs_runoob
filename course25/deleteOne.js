const url = 'mongodb://localhost:27017/'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	let dbo = db.db('runoob')
	const whereStr = { name: '菜鸟教程' }	// 查询条件
	dbo.collection('site').deleteOne(whereStr, (err, obj) => {
		if (err) throw err
		console.log('文档删除成功')
		db.close()
	})
})

