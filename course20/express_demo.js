// express_demo.js
const express = require('express')
let app = express()

app.get('/', (req, res) => {
	res.cookie('id', 'test123')
	res.send('Hello World')
})

let server = app.listen(8000, () => {

	let host = server.address().address
	let port = server.address().port

	console.log('应用实例, 访问地址为: http://%s:%s', host, port)

})

