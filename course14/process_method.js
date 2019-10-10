function show(method) {
	console.log(method, '\n', process[method](), '\n--------------')
}

// 输出当前目录
show('cwd')

// 输出内存使用情况
show('memoryUsage')

