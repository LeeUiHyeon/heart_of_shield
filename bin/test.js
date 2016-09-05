
var http = require('http');
 
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello nodejs');
    response.end();
}).listen(process.env.PORT,process.env.IP,function(){
    console.log('node.js start now');
});