// 同步函数异常
/*try {
	errorObject()
} catch(error) {
	console.log(error)
	console.log(1)
}

function errorObject() {
	var i = wrong + true
	console.log(1)
}*/

// 异步函数异常
/*try {
	errorObject
} catch(err) {
	console.log(err)
	console.log('ok')
}

function errorObject() {
	setTimeout(() => {
		var i = wrong + true
		console.log(1)
	}, 10)
}*/

var domain = require('domain')
var d = domain.create()
d.on('error', (err) => {
	console.log(err)
	console.log('ok')
})
d.run(() => {
	errorObject()
})

function errorObject() {
	setTimeout(() => {
		var i = wrong + true
		console.log(1)
	}, 10)
}