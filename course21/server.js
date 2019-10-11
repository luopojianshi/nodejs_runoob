const fs = require('fs')
const express = require('express')
let app = express()

// 添加新的用户数据
let user = {
	"user4" : {
		"name" : "mohit",
		"password" : "password4",
		"profession" : "teacher",
		"id" : 4
	}
}

app.get('/listUsers', (req, res) => {
	fs.readFile( __dirname + '/' + 'users.json', 'utf8', (err, data) => {
		console.log( data )
		res.end( data )
	})
})

app.get('/:id', (req, res) => {
	// 读取已存在的用户
	fs.readFile( __dirname + '/' + 'users.json', 'utf8', (err, data) => {
		data = JSON.parse( data )
		let userId = 'user' + req.params.id
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		if (userId in data) {
			let user = data[userId]
			console.log( user )
			res.end( JSON.stringify(user) )
		} else {
			res.end('该用户不存在')
		}	
	})
})

app.get('/addUser', (req, res) => {
	// 读取已存在的数据
	fs.readFile( __dirname + '/' + 'users.json', 'utf8', (err, data) => {
		data = JSON.parse( data )
		data['user4'] = user['user4']
		console.log( data )
		res.end( JSON.stringify(data) )
	})
})

app.get('/deleteUser/:id', (req, res) => {
	// 读取已存在的数据
	fs.readFile( __dirname + '/' + 'users.json', 'utf8', (err, data) => {
		data = JSON.parse( data )
		let userId = 'user' + req.params.id
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
		if (userId in data) {
			delete data[userId]

			console.log( data )
			res.end( JSON.stringify(data) )
		} else {
			res.end('该用户不存在')
		}
	})
})

let server = app.listen(8000, '127.0.0.1', () => {

	const host = server.address().address
	const port = server.address().port

	console.log('应用实例, 访问地址为 http://%s:%s', host, port)

})

