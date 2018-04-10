// 调试模式开关
var ifDebug = false;

var server = require("./node_server/server");
var router = require("./node_server/router");
var rh = require("./node_server/requestHandlers");


var handle = {
	'/':rh.index,
	'/index':rh.index,
	'/index.html':rh.index,
	'/help':rh.help,
	'/help.html':rh.help,
	'/downloads':rh.downloads,
	'/downloads.html':rh.downloads,
	'/js/socket.io-2.0.3.js':rh.js.socketIO,
	'/js/functions.js':rh.js.functions,
	'js/jquery-3.2.1.min.js':rh.js.jquery
};


if (ifDebug) console.log(handle);

server.start(router.route, handle);
