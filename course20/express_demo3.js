// express_demo3.s
const express = require('express')
let app = express()

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

let server = app.listen(8000, () => {

	let host = server.address().address
	let port = server.address().port

	console.log('应用实例, 访问地址为: http://%s:%s', host, port)

})

