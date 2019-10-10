const fs = require('fs')
let buf = new Buffer.alloc(1024)

console.log('准备打开文件!')
fs.open('input.txt', 'r+', (err, fd) => {
	if (err) {
		return console.error(err)
	}
	console.log('文件打开成功!')
	console.log('截取 10 字节内的文件内容, 超出部分将被去除.')

	// 截取文件
	fs.ftruncate(fd, 10, err => {
		if (err) {
			console.log(err)
		}
		console.log('文件截取成功!')
		console.log('读取相同的文件!')
		fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
			if (err) {
				console.log(err)
			}

			// 仅输出读取的字节
			if (bytes > 0) {
				console.log(buf.slice(0, bytes).toString())
			}

			// 关闭文件
			fs.close(fd, err => {
				if (err) {
					console.log(err)
				}
				console.log('文件关闭成功!')
			})
		})
	})
})

