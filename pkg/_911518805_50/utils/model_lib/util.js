var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
    return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
};

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var config = require("./config");

function clone(e) {
    var r = void 0;
    if (null == e || "object" != (void 0 === e ? "undefined" : _typeof(e))) return e;
    if (e instanceof Date) return (r = new Date()).setTime(e.getTime()), r;
    if (e instanceof Array) {
        r = [];
        for (var t = 0, n = e.length; t < n; t++) {
            r[t] = clone(e[t]);
        }
        return r;
    }
    if (e instanceof Object) {
        for (var i in r = {}, e) {
            e.hasOwnProperty(i) && (r[i] = clone(e[i]));
        }
        return r;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}

function shallowDiff(e, r) {
    var t = {};
    return Object.keys(r).forEach(function(n) {
        r[n] !== e[n] && (t[n] = r[n]);
    }), t;
}

var getPathTokens = function() {
    var e = {};
    return function(r) {
        if (e[r]) return e[r];
        var t = [];
        return r.split(".").forEach(function(e) {
            e.endsWith("]") ? e.replace(/\[/g, ".[").split(".").forEach(function(e) {
                t.push(e);
            }) : t.push(e);
        }), e[r] = t, t;
    };
}();

function getSetDataObjValueForPath(e, r) {
    if (isObject(e) && isString(r)) {
        if (null != e[r]) return e[r];
        for (var t = getPathTokens(r), n = t.length, i = "", o = void 0, a = 0; a < n; a++) {
            var f = t[a];
            if (null == o) i.length ? t[a].startsWith("[") ? i += t[a] : i += "." + t[a] : i = t[a], 
            o = e[i]; else {
                var u = f.match(/^\[(\d+)]$/);
                if (!(o = u ? o[parseInt(u[1], 10)] : o[t[a]])) return;
            }
        }
        return o;
    }
}

function getValueForPath(e, r) {
    if (isObject(e) && isString(r)) {
        if (null != e[r]) return e[r];
        var t = getPathTokens(r), n = e, i = !1;
        return t.some(function(e, r) {
            i = r === t.length - 1;
            var o = e.match(/^\[(\d+)]$/);
            if (o) {
                var a = parseInt(o[1], 10);
                if (null == (n = n[a])) return !0;
            } else if (null == (n = n[e])) return !0;
        }), i ? n : void 0;
    }
}

function isString(e) {
    return "string" == typeof e || e instanceof String;
}

function isNumber(e) {
    return "number" == typeof e && isFinite(e);
}

function isBoolean(e) {
    return "boolean" == typeof e;
}

function isObject(e) {
    return e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.constructor === Object;
}

function isArray(e) {
    return e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.constructor === Array;
}

function isFunction(e) {
    return "function" == typeof e;
}

function isNull(e) {
    return null === e;
}

function isUndefined(e) {
    return void 0 === e;
}

function validate(e, r) {
    return Object.keys(r).every(function(t) {
        if (!e[t]) throw new Error("No field=" + t + " found in schema=" + e.schemaName + ".");
        var n = r[t];
        if (isNull(n) || isUndefined(n)) return !0;
        if (e[t] === String) {
            if (!isString(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be String for schema=" + e.schemaName);
            return !0;
        }
        if (e[t] === Number) {
            if (!isNumber(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be Number for schema=" + e.schemaName);
            return !0;
        }
        if (e[t] === Boolean) {
            if (!isBoolean(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be Boolean for schema=" + e.schemaName);
            return !0;
        }
        if (e[t] === Array) {
            if (!isArray(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be Array for schema=" + e.schemaName);
            return !0;
        }
        if (e[t] === Object) {
            if (!isObject(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be Object for schema=" + e.schemaName);
            return !0;
        }
        if (isObject(e[t])) throw new Error("schema type cannot be a hierarchical object, only String, Number, Boolean, Object type supported");
        throw new Error("Unsupported schema type " + _typeof(e[t]));
    });
}

function getNormalArrayElementMapping(e) {
    if (config.enableArrayMappingShare && e.__arrayElementMapping__) {
        var r = e.__arrayPath__ + "[" + e.__arrayIndex__ + "]", t = {}, n = e.__arrayElementMapping__;
        return Object.keys(n).forEach(function(e) {
            var i = n[e];
            "__dataIdPath" !== e ? t[r + "." + e] = i : Object.defineProperty(t, "__dataIdPath", {
                configurable: !1,
                enumerable: !1,
                value: r + "." + i,
                writable: !1
            });
        }), t;
    }
    return e;
}

function mergeDeep(e) {
    for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) {
        t[n - 1] = arguments[n];
    }
    if (!t.length) return e;
    var i = t.shift();
    if (isObject(e) && isObject(i)) for (var o in i) {
        isObject(i[o]) ? (e[o] || Object.assign(e, _defineProperty({}, o, {})), mergeDeep(e[o], i[o])) : Object.assign(e, _defineProperty({}, o, i[o]));
    }
    return mergeDeep.apply(void 0, [ e ].concat(t));
}

module.exports = {
    getNormalArrayElementMapping: getNormalArrayElementMapping,
    clone: clone,
    getSetDataObjValueForPath: getSetDataObjValueForPath,
    getValueForPath: getValueForPath,
    isString: isString,
    getPathTokens: getPathTokens,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isObject: isObject,
    isArray: isArray,
    isFunction: isFunction,
    isNull: isNull,
    isUndefined: isUndefined,
    validate: validate,
    deepEqual: require("./deep_equal.js"),
    shallowDiff: shallowDiff,
    mergeDeep: mergeDeep
};