/*var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('Request was made ' + req.url);

    //HTML
    res.writeHead(200, {'Content-Type' : 'text/html'})
    var myReadStream = fs.createReadStream(__dirname + '/index.html');
    myReadStream.pipe(res)

    //JSON
    res.writeHead(200, {'Content-Type':'application/json'});
    var myObj = {
        name: 'Ryu',
        age: 25,
        gender: 'male'
    }
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Server in port 3000');*/

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('Request was made ' + req.url);
    
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url == '/api/ninjas'){
        var ninjas = [{name:'ryu', age:28}, {name:'yoshi', age: 32}];
        res.writeHead(200, { 'Cotent-Type': 'application/json' });
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

});

server.listen(3000, '127.0.0.1');
console.log('Server in port 3000');