/**
 * client.js创建web客户端
 */
var http = require("http");

//请求项
var options = {
	host:"localhost",
	port:'8001',
	path:'/hello.html'
};
//回调响应函数
function callback(response){
	var body = "";
	//流对象都为EventEmitter实例
	response.on("data",function(data){
		body += data;
	});
	response.on("end",function(){
		console.log("body:\n"+body+"\n");
	});
}

function main(){
	var req = http.request(options,callback);
	req.end();//发送请求
}

exports.main = main;