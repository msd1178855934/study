var storage = require("./storage"), PREFIX = "STORAGE_POI_";

function setPoi(e, t) {
    storage.setObj(PREFIX + e, t);
}

function getPoi(e) {
    return storage.getObj(PREFIX + e);
}

module.exports = {
    setPoi: setPoi,
    getPoi: getPoi
};