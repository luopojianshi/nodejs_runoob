const os = require('os')

// CPU 的字节序
console.log('endianness: \t\t' + os.endianness())

// 操作系统名
console.log('type: \t\t\t' + os.type())

// 操作系统名
console.log('platform: \t\t' + os.platform())

// 系统内存总量
console.log('total memory: \t\t' + os.totalmem() + ' bytes.')

// 操作系统空闲内存量
console.log('free memory: \t\t' + os.freemem() + ' bytes.')

