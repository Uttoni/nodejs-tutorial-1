//GLOBAL OBJECTS
/*console.log();
setInterval();
clearInterval();
setTimeout();
clearTimeout();

//GLOBAL OBJETS BROWSER
//Everything is inside window
window
window.console.log();
//The JS Engine adds window by default
console.log()

//GLOBAL OBJECTS NODE - but not accessible like this
global
global.console.log();
console.log()


//Diferença
var message = 'text';
//message is global for browser but not for node
console.log(global.message);*/

//MODULE is the object that holds info of the file, every file is a module
//console.log(module);
/*
const logger = require('./logger.js');
logger.log("Eu me amo");*/

//WORKING WITH SCREEN BY USING PATH
/*
const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj);*/

const EventEmitter = require('events');
const emitter = new EventEmitter();

//LISTEN FOR AN EVENT
emitter.on('messageLogged', (args) => {
    console.log('Listener called!');
    console.log(args);
})

//THROW AN EVENT
emitter.emit('messageLogged', {args: 'informações do evento criado que quero poder achar no listener'});