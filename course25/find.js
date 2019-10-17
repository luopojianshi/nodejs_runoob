const url = 'mongodb://localhost:27017/'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	let dbo = db.db('runoob')
	const whereStr = { name: '菜鸟工具' }
	dbo.collection('site').find(whereStr).toArray( (err, res) => { // 返回集合中的所有数据
		if (err) throw err
		console.log(res)
		db.close()
	})
})

