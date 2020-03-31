var bindingUtil = require("./bindingUtil.js"), MappingTree = require("./mapping_tree"), constants = require("./constants"), util = require("./util"), config = require("./config");

function declareBinding(n) {
    var a = n.instance;
    if (!a) throw new Error("Instance not found in declareBinding options.");
    var e = n.schema;
    if (!e) throw new Error("schema not found in declareBinding options.");
    var t = util.clone(n.mapping);
    if (!t) throw new Error("mapping not found in declareBinding options.");
    var i = n.arrayPath, r = n.onUpdate, o = !!n.shouldSetPrevData;
    if (Object.keys(t).forEach(function(n) {
        var a = t[n];
        if (!e[a]) throw new Error("Mapping is not matched with schema. Do you use the wrong schema?");
    }), hook(a) !== constants.enumHookStatus.InstanceRemoved) {
        var s = void 0;
        if (a[constants.Name_Declared_Bindings].some(function(a) {
            if (n.arrayPath !== a.arrayPath) return !1;
            var e = Object.keys(a.mapping).some(function(a) {
                return null != n.mapping[a];
            });
            return e && (s = a), e;
        }) && s) config.enableDebugLog && console.log("[binding] Ignore duplicated declared binding", {
            schema: n.schema,
            arrayPath: n.arrayPath,
            mapping: n.mapping
        }, "is duplicated with", {
            schema: s.schema,
            arrayPath: s.arrayPath,
            mapping: s.mapping
        }); else {
            var c = null;
            if (Object.keys(t).some(function(n) {
                if ("id" === t[n]) return c = n, !0;
            }), !c) throw new Error('No "id" mapping found for ' + JSON.stringify(t) + " in declareBinding options");
            Object.defineProperty(t, "__dataIdPath", {
                configurable: !1,
                enumerable: !1,
                value: c,
                writable: !1
            }), Object.keys(t).every(function(n) {
                return -1 === n.indexOf(".");
            }) && Object.defineProperty(t, "__noDots__", {
                configurable: !1,
                enumerable: !1,
                value: 1,
                writable: !1
            }), a[constants.Name_Declared_Bindings].push({
                schema: e,
                mapping: t,
                arrayPath: i,
                onUpdate: r
            });
            var d = a[constants.Name_Reactive_Models_Mapping_Tree];
            i ? bindingUtil.normalizeArrayDataAndMapping(a.data || {}, i, t).forEach(function(n) {
                var t = n.normalizedArrayElementData, i = n.mapping;
                bindingUtil.doBinding(e, i, a, t, d, r, o);
            }) : bindingUtil.doBinding(e, t, a, a.data || {}, d, r, o);
        }
    }
}

var getNextInstanceId = function() {
    var n = 0;
    return function() {
        return n++;
    };
}();

function hook(n) {
    var a = n[constants.Name_Has_Hooked];
    if (n[constants.Name_Has_Hooked] === constants.enumHookStatus.Hooked) return constants.enumHookStatus.Hooked;
    if (a === constants.enumHookStatus.InstanceRemoved) return constants.enumHookStatus.InstanceRemoved;
    if (void 0 !== a) throw new Error("Internal error. Unknown hook status in instance" + constants.Name_Has_Hooked);
    n[constants.Name_Has_Hooked] = constants.enumHookStatus.Hooked, n[constants.Name_Instance_Id] = getNextInstanceId(), 
    n[constants.Name_Reactive_Models_Mapping_Tree] = new MappingTree(), n[constants.Name_Declared_Bindings] = [];
    var e = n.setData;
    return n[constants.Name_Original_SetData] = e, n.setData = function(n, a) {
        e.call(this, n, a);
        var t = this, i = t[constants.Name_Declared_Bindings];
        if (i.some(function(a) {
            var e = a.arrayPath;
            if (e) return Object.keys(n).some(function(n) {
                return n.startsWith(e);
            });
            var t = a.mapping;
            return t.__noDots__ ? Object.keys(t).some(function(a) {
                return null != n[a];
            }) : Object.keys(t).some(function(a) {
                return Object.keys(n).some(function(n) {
                    return a.startsWith(n);
                });
            });
        })) {
            var r = t[constants.Name_Reactive_Models_Mapping_Tree];
            i.forEach(function(a) {
                var e = a.mapping, i = a.arrayPath, o = a.schema, s = a.onUpdate;
                i && n[i] && r.getPathModels(i).forEach(function(n) {
                    n.unBindData();
                });
                if (i) bindingUtil.normalizeArrayDataAndMapping(n, i, e).forEach(function(n) {
                    var a = n.normalizedArrayElementData, e = n.mapping, i = e.__dataIdPath;
                    if (null == util.getValueForPath(t.data, i)) {
                        var c = r.getPathModels(i);
                        if (c.length) return void c.forEach(function(n) {
                            n.unBindData();
                        });
                    }
                    bindingUtil.doBinding(o, e, t, a, r, s);
                }); else {
                    var c = e.__dataIdPath;
                    if (null == util.getValueForPath(t.data, c)) {
                        var d = r.getPathModels(c);
                        if (d.length) return void d.forEach(function(n) {
                            n.unBindData();
                        });
                    }
                    bindingUtil.doBinding(o, e, t, n, r, s);
                }
            });
        }
    }, constants.enumHookStatus.Hooked;
}

module.exports = declareBinding;