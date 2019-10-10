const buf1 = Buffer.from('runoob')

// 剪切缓冲区
const buf2 = buf1.slice(0, 2)

console.log('buffer2 content: ', buf2.toString())

