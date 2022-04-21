//CREATING A SERVER
/*
var http = require('http');
var server = http.createServer((req, res) => {
    console.log('Request was made ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');*/

//CREATING A STREAM
/*var http = require('http');
var fs = require('fs');
//ADDING UTF8 SHOWS THE REAL TEXT
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

var i=0;
myReadStream.on('data', (chunk) => {
    i++
    console.log('New chunk received: ' + i)
    console.log(chunk);

    myWriteStream.write('New chunk received: ' + i + '\n' + chunk)
});

myReadStream.pipe(myWriteStream);*/


//Using a stream to load data from the server
var http = require('http');
var fs = require('fs');
var server = http.createServer((req, res) => {
    console.log('Request was made ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');