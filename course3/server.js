const http = require('http')

http.createServer( (req, res) => {

	// 发送 HTTP 头部
	// HTTP 状态值：200 : OK
	// 内容类型：text/plain
	res.writeHead(200, { 'Content-Type': 'text/plain' })

	// 发送响应数据 'Hello World'
	res.end('Hello World\n')

}).listen(8000)

// 终端打印信息如下
console.log('Server is running at http://127.0.0.1:8000/')

