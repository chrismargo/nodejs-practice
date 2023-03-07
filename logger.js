var url = "http://mylogger.io/log";

function log(message){
    // SEND AN HTTP REQUEST
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;