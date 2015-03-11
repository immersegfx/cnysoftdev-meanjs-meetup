/*
 Testing the NodeJs Feature of keeping a connection open and writing to it.
 Then either visit http://127.0.0.1:8888 in your browser or open it up using curl
 curl http://127.0.0.1:8888
 */

var port = 8888;
var num = 5;
var http = require('http');

http.createServer(function (req, res) {
    var replies = 0;
    res.writeHead(200, {'Content-Type': 'text/example'});

    var interval = setInterval(function () {
        if (replies < num) {
            res.write('Hello, I have replied to you ' + replies + " times\r\n");
            replies++;
        } else {
            res.end('I have nothing more to say');
            clearInterval(interval);
        }
    }, 2000);
}).listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + port);