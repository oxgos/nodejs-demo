var name;
exports.setName = function(rename) {
	name = rename;
}

exports.sayName = function() {
	console.log('hello ' + name);
}