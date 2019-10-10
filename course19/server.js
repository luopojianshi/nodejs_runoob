const fs = require('fs')
const url = require('url')
const http = require('http')

// 创建服务器
http.createServer( (req, res) => {
	// 解析请求, 包括文件名
	let pathname = url.parse(req.url).pathname

	// 输出请求的文件名
	console.log('Request for ' + pathname + ' received.')

	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1), (err, data) => {
		if (err) {
			console.log(err)
			// HTTP 状态码：404 : NOT FOUND
			// Content Type: text/html
			res.writeHead(404, { 'Content-Type': 'text/html' })
		} else {
			// HTTP 状态码：200 : OK
			// Content Type: text/html
			res.writeHead(200, { 'Content-Type': 'text/html' })

			// 响应文件内容
			res.write(data.toString())
		}
		// 发送响应数据
		res.end()
	})
}).listen(8000)

// 在控制台输出一下信息
console.log('Server running at http://127.0.0.1:8000/')

