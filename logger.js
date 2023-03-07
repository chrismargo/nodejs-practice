// (function (exports, require, module, __filename, __dirname){
// })
const EventEmitter = require('events');
// const emitter = new EventEmitter();

// console.log(__filename);
// console.log(__dirname);

class Logger extends EvetnEmitter {
    log(message){
    // SEND AN HTTP REQUEST
        console.log(message);
        this.emit('messageLogged', {
            id: 1,
            url: 'http://'
        });
    }
}

var url = "http://mylogger.io/log";

module.exports = Logger;
// module.exports.endPoint = url;

// exports = log; 