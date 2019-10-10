const http = require('http')
const url = require('url')

function start(route) {
	function onRequest (req, res) {
		if (req.url === '/favicon.ico') return

		const pathname = url.parse(req.url).pathname
		console.log('Request for ' + pathname + ' received.')

		route(pathname)

		res.writeHead(200, {'Content-Type': 'text/plain' })
		res.write('Hello World')
		res.end()
	}

	http.createServer(onRequest).listen(8889)
	console.log('Server has started on http://127.0.0.1:8889')
}

exports.start = start

