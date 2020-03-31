var storage = require("./storage"), PREFIX = "MENTION_LAST_METION_READ_TIME";

function setLastMetionReadTime(e) {
    storage.setNumber(PREFIX, e);
}

function getLastMetionReadTime() {
    return storage.getNumber(PREFIX) || 0;
}

module.exports = {
    setLastMetionReadTime: setLastMetionReadTime,
    getLastMetionReadTime: getLastMetionReadTime
};