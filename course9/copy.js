const buf1 = Buffer.from('abcdefghijkl')
const buf2 = Buffer.from('RUNOOB')

// 将 buf2 插入到 buf1 的指定位置上
buf2.copy(buf1, 2)

console.log(buf1.toString())

