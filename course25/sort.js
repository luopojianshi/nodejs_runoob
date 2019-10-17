const url = 'mongodb://localhost:27017/'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	let dbo = db.db('runoob')
	const mysort = { type: 1 }
	dbo.collection('site').find().sort(mysort).toArray( (err, res) => {
		if (err) throw err
		console.log(res)
		db.close()
	})
})

