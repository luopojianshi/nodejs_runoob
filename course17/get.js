const url = require('url')
const http = require('http')
const util = require('util')

http.createServer( (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })

	// 解析 url 参数
	let params = url.parse(req.url, true).query
	res.write('网站名：' + params.name)
	res.write('\n')
	res.write('网站 URL：' + params.url)
	res.end()

}).listen(3000)

