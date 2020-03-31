var eventHandlerMapping = {};

function add(e, n) {
    if (e && n) {
        var r = eventHandlerMapping[e];
        r || (r = [], eventHandlerMapping[e] = r);
        var t = !1;
        return 0 == r.length && (t = !0), r.push(n), t;
    }
}

function getHandlers(e) {
    if (!e) return [];
    var n = eventHandlerMapping[e];
    return n || [];
}

function notify(e, n) {
    if (e) {
        var r = eventHandlerMapping[e];
        if (r && r.length) {
            for (var t = 0; t < r.length; t++) {
                (0, r[t])(n);
            }
            delete eventHandlerMapping[e];
        }
    }
}

function remove(e) {
    delete eventHandlerMapping[e];
}

module.exports = {
    add: add,
    getHandlers: getHandlers,
    remove: remove,
    notify: notify
};