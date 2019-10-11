const fs = require('fs')
const child_process = require('child_process')

for (let i=0; i<3; i++) {
	let workerProcess = child_process.fork('support.js', [i])

	workerProcess.on('close', code => {
		console.log('子进程已退出, 退出码 ' + code)
	})
}

