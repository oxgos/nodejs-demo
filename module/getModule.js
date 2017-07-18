/*模块和对象稍有区别,模块指向同一个,对象可创建多个*/
var myMod1 = require('./module');
myMod1.setName('John');

var myMod2 = require('./module');
myMod2.setName('Marry');


myMod1.sayName();//输入出marry