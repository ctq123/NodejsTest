/**
 * util.inspect将任意对象转化成字符串
 * 常用于调试
 * 注意console.log(util.inspect(obj))与console.log(obj)的区别
 */

var util = require("util");
function Person(){
	this.name = "Jack";
	this.age = 19;
}

function main(){
	var obj = new Person();
	console.log(obj);
	console.log("obj="+obj);
	console.log("util.inspect(obj)="+util.inspect(obj));
	console.log("");
	
	if(util.isArray([])){
		console.log("[] is an Array");
	}else{
		console.log("[] is not an Array");
	};

	if(util.isRegExp("/some regexp/")){
		console.log("'/some regexp/' is regexp");
	}else{
		console.log("'/some regexp/' is not regexp");
	}

	if(util.isDate(Date())){
		console.log("Date() is isDate");
	}else{
		console.log("Date() is not isDate");
	}

}

exports.main = main;