const express = require('express')
let app = express()

app.use('/public', express.static('public'))

app.get('/index.html', (req, res) => {
	res.sendFile( __dirname + '/' + 'index.html' )
})

app.get('/process_get', (req, res) => {
	// 输出 JSON 格式
	let response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	}
	console.log(response)
	res.write('<head><meta charset="utf-8"></head>')
	res.end(JSON.stringify(response))
})

let server = app.listen(8000, '127.0.0.1', () => {

	let host = server.address().address
	let port = server.address().port

	console.log('应用实例, 访问地址为: http://%s:%s', host, port)

})

