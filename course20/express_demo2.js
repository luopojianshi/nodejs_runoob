// express_demo2.js
const express = require('express')
let app = express()

// 主页 GET 请求
app.get('/', (req, res) => {
	console.log('主页 GET 请求')
	res.cookie('url', req.path)
	res.cookie('type', 'GET')
	res.send('Hello GET')
})

// 主页 POST 请求
app.post('/', (req, res) => {
	console.log('主页 POST 请求')
	res.cookie('url', req.path)
	res.cookie('type', 'POST')
	res.send('Hello POST')
})

// /del_user 页面响应
app.get('/del_user', (req, res) => {
	console.log('/del_user 响应 DELETE 请求')
	res.cookie('url', req.path)
	res.cookie('type', 'delete')
	res.send('删除页面')
})

// /list_user 页面响应
app.get('/list_user', (req, res) => {
	console.log('/list_user GET 请求')
	res.cookie('url', req.path)
	res.cookie('type', 'list')
	res.send('用户列表页面')
})

// 对页面 abcd, abxcd, ab123cd 等响应 GET 请求
app.get('/ab*cd', (req, res) => {
	console.log('/ab*cd GET 请求')
	res.cookie('url', req.path)
	res.cookie('type', 'regexp')
	res.send('正则匹配')
})

let server = app.listen('8001', () => {

	let host = server.address().address
	let port = server.address().port

	console.log('应用实例, 访问地址为: http://%s:%s', host, port)

})

