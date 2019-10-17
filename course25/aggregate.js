const url = 'mongodb://localhost:27017/'
let MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) throw err
	let dbo = db.db('runoob')
	dbo.collection('orders').aggregate([
		{ $lookup:
			{
				from: 'products',		// 右集合
				localField: 'product_id',	// 左集合 join 字段
				foreignField: '_id',		// 右集合 join 字段
				as: 'orderdetails'		// 新生成字段（类型 array ）
			}
		}
	]).toArray( (err, res) => {
		if (err) throw err
		console.log( JSON.stringify(res) )
		db.close()
	})
})

