var http = require('http')
var domain = require('domain')

var server = http.createServer((req, res) => {
	let d = domain.create()
	d.on('error', (err) => {
		res.writeHead(500, {'content-type': 'text/plain'})
		res.end('server wrong')
	})
	d.run(() => {
		setTimeout(() => {
			// let i = wrong + true;
			res.writeHead(200, {'content-type': 'text/plain'})
			res.end('hello world')
		}, 10)
	})
})
server.listen(3000, () => {
	console.log('server open at port 3000')
})