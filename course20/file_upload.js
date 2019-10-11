const fs = require('fs')
const multer = require('multer')
const express = require('express')
const bodyParser = require('body-parser')

let app = express()

app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(multer({ dest: '/tmp/' }).array('image'))

app.get('/upload.html', (req, res) => {
	res.sendFile( __dirname + '/' + 'upload.html' )
})

app.post('/file_upload', (req, res) => {

	console.log(req.files[0])	// 上传的文件信息

	let des_file = __dirname + '/public/img/' + req.files[0].originalname
	fs.readFile( req.files[0].path, (err, data) => {
		fs.writeFile(des_file, data, err => {
			let response
			if (err) {
				console.log( err )
			} else {
				response = {
					message: 'File uploaded successfully',
					filename: req.files[0].originalname
				}
			}
			console.log( response )
			res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
			res.end( JSON.stringify (response ))
		})
	})
})

let server = app.listen(8000, '127.0.0.1', () => {

	const host = server.address().address
	const port = server.address().port

	console.log('应用实例, 访问地址为: http://%s:%s', host, port)

})

