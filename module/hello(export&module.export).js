function Hello() {
	var name;
	this.setName = function(rename) {
		name = rename;
	}
	this.sayName = function() {
		console.log('hello ' + name);
	}
}

/*
	用exports的话,require('./hello(export&module.export)').Hello引用
	exports.Hello = Hello;
*/
module.exports = Hello;