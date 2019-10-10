// 输出全局变量 __filename 的值
console.log( '__filename:', '\n',  __filename )

// 输出全局变量 __dirname 的值
console.log( '__dirname:', '\n', __dirname )

let timer = 0
function printHello () {
	timer++	
	if (timer > 5) clearInterval(t2)

	console.info( 'Hello, World!' )	
}
// 两秒后执行以上函数
let t = setTimeout(printHello, 2000)

// 清楚定时器
// clearTimeout(t)

// 两秒后执行以上函数
t2 = setInterval(printHello, 1500)

