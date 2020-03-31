var ReactiveModel = require("./reactive_model"), util = require("./util.js"), config = require("./config");

function doBinding(e, a, t, r, n, i, l) {
    var o = a.__dataIdPath;
    if (l) {
        var d = util.getValueForPath(t.data, o), u = require("./table_manager").getTable(e);
        if (null != d && u.hasRow(d)) {
            var c = u.getRow(d), g = {};
            Object.keys(a).some(function(e) {
                var t = a[e];
                null != c[t] && (g[e] = c[t]);
            }), Object.keys(g).length && t[constants.Name_Original_SetData](g);
        }
    }
    var f = util.getSetDataObjValueForPath(r, o);
    if (null != f) {
        config.enableDebugLog && console.log("[binding] setData", r);
        var s = n.getPathModels(o);
        if (0 === s.length) new ReactiveModel(e).bindData(t, a).onUpdate(i); else {
            if (1 !== s.length) throw new Error("Internal error. Id path should not contains multiple values");
            var _ = s[0];
            _.getId() !== f ? (_.unBindData(), new ReactiveModel(e).bindData(t, a).onUpdate(i)) : _.setModelData(r, {
                from: "UPDATE_DATA_WITH_ID_IN_SET_DATA"
            });
        }
    } else if (null != util.getValueForPath(t.data, o)) {
        var h = n.getPathModels(o);
        if (0 === h.length) throw new Error("Internal error. Id field has not been bound with model");
        if (1 !== h.length) throw new Error("Internal error. Id path should not contains multiple values");
        h[0].setModelData(r, {
            from: "UPDATE_DATA_WITHOUT_ID_IN_SET_DATA"
        });
    }
}

function normalizeArrayDataAndMapping(e, a, t) {
    var r = {};
    return Object.keys(e).forEach(function(t) {
        if (t.startsWith(a)) if (t.length === a.length) e[a].forEach(function(e, a) {
            r[a] = e;
        }); else {
            var n = t.match(new RegExp(a + "\\[(\\d+)\\](.*)"));
            if (n) {
                var i = n[1], l = n[2];
                l ? l.startsWith(".") && (r[i] || (r[i] = {}), r[i][l.substring(1)] = e[t]) : r[i] = e[t];
            }
        }
    }), Object.keys(r).map(function(e) {
        var n = r[e], i = a + "[" + e + "]", l = {};
        Object.defineProperty(l, "__dataIdPath", {
            configurable: !1,
            enumerable: !1,
            value: i + "." + t.__dataIdPath,
            writable: !1
        }), config.enableArrayMappingShare ? Object.defineProperty(l, "__arrayElementMapping__", {
            configurable: !1,
            enumerable: !1,
            value: t,
            writable: !1
        }) : Object.keys(t).forEach(function(e) {
            var a = t[e];
            "__dataIdPath" !== e && (l[i + "." + e] = a);
        }), Object.defineProperty(l, "__arrayPath__", {
            configurable: !1,
            enumerable: !1,
            value: a,
            writable: !1
        }), Object.defineProperty(l, "__arrayIndex__", {
            configurable: !1,
            enumerable: !1,
            value: e,
            writable: !1
        });
        var o = {};
        return Object.keys(n).forEach(function(e) {
            o[i + "." + e] = n[e];
        }), {
            normalizedArrayElementData: o,
            mapping: l
        };
    });
}

module.exports = {
    normalizeArrayDataAndMapping: normalizeArrayDataAndMapping,
    doBinding: doBinding
};