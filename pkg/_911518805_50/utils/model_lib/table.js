var _createClass = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
    };
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var tableEventBus = require("./table_event_bus"), config = require("./config"), util = require("./util"), Table = function() {
    function e(t) {
        _classCallCheck(this, e), this._schema = t, this._tableName = t.schemaName, this._table = {};
    }
    return _createClass(e, [ {
        key: "setRow",
        value: function value(e, t, a) {
            var i = this;
            if (null == t.id && (t.id = e), t.__isLazyMappingValue__) {
                if (this._table[e]) throw new Error("Internal error. Lazy mapping value should be set on empty row.");
                this._table[e] = t;
            } else if (util.validate(this._schema, t)) if (this._table[e]) {
                this._table[e].__isLazyMappingValue__ && (this._table[e] = this.calcLazyMappingValue(this._table[e]));
                var n = {}, l = this._table[e];
                Object.keys(t).forEach(function(e) {
                    var a = t[e];
                    a !== l[e] && (n[e] = a);
                }), Object.assign(this._table[e], n), Object.keys(n).length && wx.nextTick(function() {
                    tableEventBus.notify(i._tableName, e, util.clone(i._table[e]), n, a);
                });
            } else this._table[e] = util.clone(t);
        }
    }, {
        key: "mergeRow",
        value: function value(e, t, a) {
            var i = this;
            if (t.__isLazyMappingValue__) this._table[e] = t; else if (util.validate(this._schema, t)) {
                if (!this._table[e]) {
                    if (!a) return void this.setRow(e, t);
                    throw new Error("Internal error. Merge row get called when row is empty.");
                }
                if (this._table[e].__isLazyMappingValue__) {
                    var n = {}, l = this._table[e].reactiveModel;
                    this._table[e] = this.calcLazyMappingValue(this._table[e]);
                    var r = this._table[e];
                    if (Object.keys(t).forEach(function(e) {
                        var a = t[e];
                        a !== r[e] && (n[e] = a);
                    }), Object.keys(n).length) Object.assign(this._table[e], n), wx.nextTick(function() {
                        tableEventBus.notify(i._tableName, e, util.clone(i._table[e]), n, a);
                    }); else if (a && l === a.reactiveModel) {
                        var s = util.clone(t);
                        wx.nextTick(function() {
                            tableEventBus.notify(i._tableName, e, util.clone(i._table[e]), s, a);
                        });
                    }
                } else {
                    var o = {}, u = this._table[e];
                    Object.keys(t).forEach(function(e) {
                        var a = t[e];
                        a !== u[e] && (o[e] = a);
                    }), Object.assign(this._table[e], o), Object.keys(o).length && wx.nextTick(function() {
                        tableEventBus.notify(i._tableName, e, util.clone(i._table[e]), o, a);
                    });
                }
            }
        }
    }, {
        key: "getRow",
        value: function value(e) {
            var t = this._table[e];
            if (!t) return {};
            t.__isLazyMappingValue__ && (t = this.calcLazyMappingValue(t));
            return util.clone(t);
        }
    }, {
        key: "hasRow",
        value: function value(e) {
            return !!this._table[e];
        }
    }, {
        key: "addRowUpdateListener",
        value: function value(e, t) {
            return tableEventBus.add(this._tableName, e, t);
        }
    }, {
        key: "removeRowUpdateListener",
        value: function value(e, t) {
            var a = this;
            tableEventBus.remove(this._tableName, e, t, function() {
                config.enableDebugLog && console.log("[binding] remove row", a._table[e]), delete a._table[e];
            });
        }
    }, {
        key: "calcLazyMappingValue",
        value: function value(e) {
            if (e.__isLazyMappingValue__) {
                var t = e.id, a = e.data, i = e.mapping;
                config.enableArrayMappingShare && (i = util.getNormalArrayElementMapping(i));
                var n = {};
                if (Object.keys(i).forEach(function(e) {
                    var t = i[e], l = util.getValueForPath(a, e);
                    void 0 !== l && (n[t] = l);
                }), n.id !== t) throw new Error("Internal Error. Id is not equal");
                return n;
            }
            return e;
        }
    } ]), e;
}();

module.exports = Table;