/**
 * nodejs 函数
 * 在js中一个函数可以作为另一个函数接收一个参数
 */

function say(word){
	console.log(word);
}

function executeFunction(tagFunction,value){
	tagFunction(value);
}

executeFunction(say,"Hello,CQ");