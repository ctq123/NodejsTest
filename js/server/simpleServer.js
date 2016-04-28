/**
 * nodejs 应用的组成
 * 模拟一个服务器请求
 */

//step 1:引入required模块
var http = require("http");

//step 2:创建服务器
http.createServer(
	//step 3:接收请求与响应请求
	function(require,response){
		//发送 HTTP 头部
		//HTTP 状态 200：ok
		//内容类型：text/plain
		response.writeHead(200,{"Content-Type":'text/plain'});

		//发送响应数据“Hello World”
		response.end("Hello World\n");
	}
	).listen(8888);

//终端打印如下信息
console.log("Server running at http://127.0.0.1:8888/");