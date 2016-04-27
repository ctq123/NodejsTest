/**
 * 访问http://127.0.0.1:8888/getuser?user=123
 * @type {[type]}
 */
var http = require("http");
var url = require("url");

function start(route){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for pathname=["+ pathname + "] received.");

		var query = url.parse(request.url).query;
		console.log("Request for query=["+ query + "] received.");

		route(pathname);

		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("\nrquest url=[" +request.url+"]");
		response.write("\nrquest url pathname=[" +pathname+"]");
		response.write("\nrquest url query=[" +query+"]");
		response.write("\nThanks for request.");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;