// write node server code here and run it with node node.js
// retun hellow world in browser
var http = require('http');
var fs = require('fs');


// use cors
// http.createServer(function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Request-Method', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     if ( req.method === 'OPTIONS' ) {
//         res.writeHead(200);
//         res.end();
//         return;
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Hello World!');
//     return res.end();
// }).listen(8080);


// node server that hosts 4 files static html / css / js / ttf
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    console.log(req.url);
     if (req.url == '/font.ttf') {
            fs.readFile('GE_SS_TEXT_LIGHT.ttf', function(err, data) {
            res.writeHead(200, {'Content-Type': 'application/x-font-ttf'});
            res.write(data);
            return res.end();
        });
    } else if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello World!');
        return res.end();
    }
}).listen(8080);

console.log('Server running at localhost:8080');