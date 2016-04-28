/**
 * 服务器接收请求和响应请求
 */

var http = require("http");
var url = require("url");
var fs = require("fs");

var htmlfolder = "../html/";
function onRequest(request, response){
	var pathname = url.parse(request.url).pathname;
	console.log("recevied a request =["+ request.url +"] from client. pathname ="+pathname);
	
	var filename = htmlfolder + pathname.substr(1, pathname.length);
	console.log("ready to read file ["+filename+ "]");

	fs.readFile(filename, function(err,data){
		if(err){
			console.error("reading file "+filename+" error.\n"+err);
			response.writeHead(404, {"Content-Type":"text/html"});
		}else{
			response.writeHead(200, {"Content-Type":"text/html"});
			//响应内容
			response.write(data.toString());
		}
		response.end();//发送响应
	});
}

function main(){
	http.createServer(onRequest).listen(8001);
	console.log("Server running at http://127.0.0.1:8001/");
}

exports.main = main;