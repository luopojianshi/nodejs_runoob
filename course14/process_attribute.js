function separator(attr) {
	console.log('--------------------', '\n', attr)
}

// 输出到终端
separator('stdout')
process.stdout.write('Hello World!' + '\n')

// 通过参数读取
separator('argv')
process.argv.forEach((val, index, array) => {
	console.log(index + ': ' + val)
})

// 获取 shell 环境变量
separator('env')
console.log(process.env)

// 获取执行路径
separator('execPath')
console.log(process.execPath)

// node 版本
separator('version')
console.log(process.version)

// node 的版本和依赖
separator('versions')
console.log(process.versions)

// 当前进程号
separator('pid')
console.log(process.pid)

// cpu 架构
separator('arch')
console.log(process.arch)

// 平台信息
separator('platform')
console.log(process.platform)

