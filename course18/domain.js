const domain = require('domain')
const EventEmitter = require('events').EventEmitter

let emitter1 = new EventEmitter()

// 创建域
let domain1 = domain.create()

domain1.on('error', err => {
	console.log('domain1 处理这个错误 (' + err.message + ')')
})

// 显示绑定
domain1.add(emitter1)

emitter1.on('error', err => {
	console.log('监听器处理此错误 (' + err.message + ')')
})

emitter1.emit('error', new Error('通过监听器来处理'))

emitter1.removeAllListeners('error')

emitter1.emit('error', new Error('通过 domain1 来处理'))

let domain2 = domain.create()

domain2.on('error', err => {
	console.log('domain2 处理这个错误 (' + err.message + ')')
})

// 隐式绑定
domain2.run( () => {
	let emitter2 = new EventEmitter()
	emitter2.emit('error', new Error('通过 domain2 来处理'))
})

domain1.remove(emitter1)
emitter1.emit('error', new Error('转换为异常, 系统将崩溃!'))

