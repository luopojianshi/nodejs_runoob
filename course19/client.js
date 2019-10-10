const http = require('http')

// 用于请求的选项
let options = {
	host: 'localhost',
	port: '8000',
	path: '/index.html'
}

// 处理响应的回调函数
let callback = res => {
	// 不断更新数据
	let body = ''
	res.on('data', data => {
		body += data
	})

	res.on('end', () => {
		// 数据接收完成
		console.log(body)
	})
}

// 向服务端发送请求
let req = http.request(options, callback)
req.end()

