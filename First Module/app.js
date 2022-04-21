//CHAMANDO ATRIBUTOS E METODOS DE OUTROS ARQUIVOS
/*var stuff = require('./stuff');

console.log(stuff.counter(['Jade', 'Jack', 'Beth']));
console.log(stuff.adder(stuff.pi, 5));
*/

//USANDO EMISSAO DE EVENTOS
/*var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('firstEvent', (msg) => {
    console.log(msg);
});

myEmitter.emit('firstEvent', 'Parametro mensagem!');
*/

//INHERITING EVENT EMITTER INTO OBJECTS
/*var events = require('events');
var util = require('util');
var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var rian = new Person('Rian');

var people = [james, mary, rian];

people.forEach((person) => {
    person.on('speak', (message) => {
        console.log(person.name + ' said: ' + message);
    });
});

james.emit('speak', 'Hey Dude!');
console.log(people[1].name);*/

//READING AND WRITING FILES
/*var fs = require('fs');
var readMe = fs.readFileSync('./readMe.txt', 'utf8', (err, data) => {
    
});
console.log(readMe);

fs.writeFileSync('readMe.txt', ' AGAIN!!! ');
*/

//PLAYING WITH DIRECTORIES
/*
fs.unlink('./readMe.txt', (err)=> {
    console.log(err);
});*/
var fs = require('fs');
fs.mkdirSync('stuff');
fs.rmdirSync('stuff')