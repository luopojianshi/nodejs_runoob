// hello2.js
function Hello () {
	let name
	
	this.setName = thyName => {
		name = thyName
	}

	this.sayHello = () => {
		console.log('Hello ' + name)
	}
}

module.exports = Hello

