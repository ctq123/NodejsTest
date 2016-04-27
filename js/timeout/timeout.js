function printHello(){
	console.log("Hello");
}

function setTimeoutHandler(){
	setTimeout(printHello, 2000);
}

function setIntervalHandler(){
	setInterval(printHello, 2000);
}

function clearTimeoutHandler(){
	var t = setTimeout(printHello, 2000);
	clearTimeout(t);
}

exports.setTimeoutHandler = setTimeoutHandler;
exports.setIntervalHandler = setIntervalHandler;
exports.clearTimeoutHandler = clearTimeoutHandler;