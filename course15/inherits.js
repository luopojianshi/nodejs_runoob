const util = require('util')

function Base() {
	this.name = 'base'
	this.base = 1991
	this.sayHello = () => {
		console.log('Hello ' + this.name)
	}
}
// Base.prototype.showName = () => {
// 	console.log(this)
// 	console.log(this.name)
// }
Base.prototype.showName = function() {
	console.log(this.name)
}

function Sub() {
	this.name = 'sub'
}

util.inherits(Sub, Base)

let objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)

let objSub = new Sub()
objSub.showName()
// objSub.sayHello()
console.log(objSub)

