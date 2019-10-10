// 创建一个长度为 10、且用 0 填充的 Buffer
const buf1 = Buffer.alloc(10)
console.log('Buffer.alloc(10)\t\t', buf1)

// 创建一个长度为 10、且用 0x1 填充的 Buffer
const buf2 = Buffer.alloc(10, 1)
console.log('Buffer.alloc(10, 1)\t\t', buf2)

// 创建一个长度为 10、且未初始化的 Buffer
// 这个方法比调用 Buffer.alloc() 更快
// 但返回的 Buffer 实例可能包含旧数据
// 因此需要使用 fill() 或 write() 重写
const buf3 = Buffer.allocUnsafe(10)
console.log('Buffer.allocUnsafe(10)\t\t', buf3)

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer
const buf4 = Buffer.from([1, 2, 3])
console.log('Buffer.from([1, 2, 3])\t\t', buf4)

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf5 = Buffer.from('tést')
console.log('Buffer.from(\'tést\')\t\t', buf5)

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer
const buf6 = Buffer.from('tést', 'latin1')
console.log('Buffer.from(\'tést\', \'latin1\')\t', buf6)

