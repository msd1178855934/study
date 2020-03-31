var constants = require("./constants");

getApp().globalData || (getApp().globalData = {}), getApp().globalData[constants.Name_TableCallbacks] = {};

var tableCallbacks = getApp().globalData[constants.Name_TableCallbacks], getNextListenerId = function() {
    var a = 0;
    return function() {
        return a++;
    };
}();

function add(a, l, t) {
    var e = getNextListenerId();
    return tableCallbacks[a] || (tableCallbacks[a] = {}), tableCallbacks[a][l] || (tableCallbacks[a][l] = {}), 
    tableCallbacks[a][l][e] = t, e;
}

function notify(a, l, t, e, b) {
    if (tableCallbacks && tableCallbacks[a] && tableCallbacks[a][l]) {
        var s = tableCallbacks[a][l], c = Object.assign({}, s);
        Object.keys(c).forEach(function(a) {
            (0, s[a])(t, e, b);
        });
    }
}

function remove(a, l, t, e) {
    if (tableCallbacks && tableCallbacks[a] && tableCallbacks[a][l] && tableCallbacks[a][l][t]) {
        delete tableCallbacks[a][l][t];
        var b = tableCallbacks[a][l];
        Object.keys(b).length || (delete tableCallbacks[a][l], e && e(a, l));
    }
}

module.exports = {
    notify: notify,
    add: add,
    remove: remove
};