const fs = require('fs')

console.log('准备删除文件!')
fs.unlink('input.txt', err => {
	if (err) {
		return console.error(err)
	}
	console.log('文件删除成功!')
})

