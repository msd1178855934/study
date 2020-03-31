var storage = require("./storage"), PREFIX = "SEARCH_HIS";

function addHistory(t) {
    var e = getAllHistory() || [];
    e.unshift(t);
    for (var r = 1; r < e.length; r++) {
        e[r].name == t.name && (e[r].shouldDelete = !0);
    }
    (e = e.filter(function(t) {
        return !t.shouldDelete;
    })).length > 5 && e.splice(5, e.length - 5), storage.setObj(PREFIX, e);
}

function getAllHistory() {
    return storage.getObj(PREFIX) || [];
}

module.exports = {
    addHistory: addHistory,
    getAllHistory: getAllHistory
};