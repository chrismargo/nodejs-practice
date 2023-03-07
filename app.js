function sayHello(name){
    console.log("Hello, " + name);
}

// sayHello("Chris");

// Global objects in JS

/*
setTimeout();
clearTimeout();
setInterval();
clearInterval();
*/

// FOR VANILLA JS
/*
window.console.log();
*/

// FOR NODE JS

/*
global.console.log()
*/

// const logger = require('./logger.js');
// console.log(logger);

// logger.log("message");

// PATH MODULE
/*
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);
*/

// OS MODULE
/*
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log("Total memory: " + totalMemory);
// console.log("Free memory: " + freeMemory);

// Template String
// ES6 / ES2015: ECMAScript 6

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
*/

// FILE STORAGE MODULE
/*
const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
*/

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Raise an event
emitter.emit('messageLogged');
