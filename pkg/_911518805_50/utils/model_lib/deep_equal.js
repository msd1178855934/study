var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(r) {
    return typeof r === "undefined" ? "undefined" : _typeof2(r);
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r === "undefined" ? "undefined" : _typeof2(r);
}, isArray = Array.isArray, keyList = Object.keys, hasProp = Object.prototype.hasOwnProperty;

module.exports = function r(t, e) {
    if (t === e) return !0;
    if (t && e && "object" == (void 0 === t ? "undefined" : _typeof(t)) && "object" == (void 0 === e ? "undefined" : _typeof(e))) {
        var n, o, i, f = isArray(t), y = isArray(e);
        if (f && y) {
            if ((o = t.length) != e.length) return !1;
            for (n = o; 0 != n--; ) {
                if (!r(t[n], e[n])) return !1;
            }
            return !0;
        }
        if (f != y) return !1;
        var u = t instanceof Date, a = e instanceof Date;
        if (u != a) return !1;
        if (u && a) return t.getTime() == e.getTime();
        var s = t instanceof RegExp, p = e instanceof RegExp;
        if (s != p) return !1;
        if (s && p) return t.toString() == e.toString();
        var c = keyList(t);
        if ((o = c.length) !== keyList(e).length) return !1;
        for (n = o; 0 != n--; ) {
            if (!hasProp.call(e, c[n])) return !1;
        }
        for (n = o; 0 != n--; ) {
            if (!r(t[i = c[n]], e[i])) return !1;
        }
        return !0;
    }
    return t != t && e != e;
};