const url = 'mongodb://localhost:27017/'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	let dbo = db.db('runoob')
	// 删除 test 集合
	dbo.collection('test').drop( (err, delOK) => {	// 执行成功 delOK 返回 true, 否则返回 false
		if (err) throw err
		if (delOK) console.log('集合已删除')
		db.close()
	})
})

