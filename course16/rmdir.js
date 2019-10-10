const fs = require('fs')

// 执行前创建一个空的 /tmp/test 目录
fs.rmdir('/tmp/test', err => {
	if (err) {
		return console.error(err)
	}
	console.log('读取 /tmp 目录')
	fs.readdir('/tmp/', (err, files) => {
		if (err) {
			return console.error(err)
		}
		files.forEach( file => {
			console.log( file )
		})
	})
})

