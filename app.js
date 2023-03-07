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

const logger = require('./logger.js');
console.log(logger);

logger.log("message");