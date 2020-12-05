//run 'node server.js' to run

const http = require('http');
const fs = require('fs');
const path = require('path')
const port = 1999;

const server = http.createServer(function (req, res) {///make server
    //What the webpage will expect ot receive, res = response, req = request
    console.log('Requested Url: ', req.url)

    res.setHeader('Acess-Control-Allow-Origin', '*');

    if (req.url == '/' || req.url == '/index.html') {//startpoint
        res.setHeader('Content-type', 'text/html')
        fs.readFile('index.html', function (err, data) {//read index.html file
            if (err) {//error because file not found
                res.writeHead(404);
                res.write('404 page not found');
            } else {
                res.write(data);
            }
            res.end()
        })
    } else {
        if (req.url.indexOf('.css') != -1) { res.setHeader('Content-type', 'text/css') }
        else if (req.url.indexOf('.js') != -1) { res.setHeader('Content-type', 'application/javascript') }
        else if (req.url.indexOf('.html') != -1) { res.setHeader('Content-type', 'text/html') }
        //var winsath = req.url.replace('/', '');// replace all \\ with /
        fs.readFile(req.url.replace('/', ''), function (err, data) {//read index.html file
            if (err) {//error because file not found
                res.writeHead(404);
                res.write('404 page not found');
                console.error('File not found: ', req.url)
            } else {
                res.write(data);
            }
            res.end()
        })
    }

}).listen(port, function (err) {//Listen to a port with server

    if (err) {
        console.error(err)
    } else {
        console.log('Listening on port: ', port);
    }

})