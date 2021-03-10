const LogMsg = require("./logMsg");

const errorLogger = (error, fileName, functionName, extra) => {
    if (!extra) {
        extra = {clientIP: global.clientIp}
    }
    console.error(JSON.stringify(error), new LogMsg(fileName, functionName, global.correlationId, extra).toJSON());
}

const infoLogger = (msg, fileName, functionName, extra) => {
    if (!extra) {
        extra = {clientIP: global.clientIp}
    }
    console.info(JSON.stringify(msg), new LogMsg(fileName, functionName, global.correlationId, extra).toJSON());
}

const log = (msg) => {
    console.info(msg);
}

module.exports = {
    error: errorLogger,
    info: infoLogger,
    log: log
}