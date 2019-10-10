const path = require('path')

// 格式化路径
console.log('normalization: \t\t' + path.normalize('/test/test1//2slashes/1slash/tab/..'))

// 连接路径
console.log('joint path: \t\t' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'))

// 转换为绝对路径
console.log('resolve: \t\t' + path.resolve('path.js'))

// 路径中文件的后缀名
console.log('ext name: \t\t' + path.extname('path.js'))

