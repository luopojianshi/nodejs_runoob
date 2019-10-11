// express_cookie.js
const util = require('util')
const express = require('express')
const cookieParser = require('cookie-parser')

let app = express()
app.use(cookieParser())

app.get('/', (req, res) => {
	console.log('Cookies: ' + util.inspect(req.cookies))
})

app.listen(8000, '127.0.0.1')

