var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var constants = require("./constants"), util = require("./util"), config = require("./config"), ReactiveModel = function() {
    function e(t) {
        _classCallCheck(this, e), this._id = null, this._schema = t, this._table = require("./table_manager").getTable(this._schema);
    }
    return _createClass(e, [ {
        key: "bindData",
        value: function value(e, t) {
            var n = t.__dataIdPath, i = util.getValueForPath(e.data, n);
            if (null != i) {
                this._id = i, Object.defineProperty(this, "_instance", {
                    configurable: !0,
                    enumerable: !1,
                    value: e,
                    writable: !1
                });
                var a = e[constants.Name_Reactive_Models_Mapping_Tree];
                return this._mapping = t, a.setPathModel(n, this), this.setModelData(e.data, {
                    from: "ADD_BINDING"
                }), this;
            }
        }
    }, {
        key: "_getReversedMapping",
        value: function value(e) {
            var t = this;
            return this._reversedMapping ? this._reversedMapping : (this._reversedMapping = {}, 
            Object.keys(e).forEach(function(n) {
                var i = e[n];
                t._reversedMapping[i] = n;
            }), this._reversedMapping);
        }
    }, {
        key: "_addListener",
        value: function value() {
            var e = this;
            if (void 0 === this._listenerId) {
                var t = this._id;
                if (null == t) return;
                this._bindingInfoPage = {
                    pageOrComponentId: this._instance[constants.Name_Instance_Id],
                    route: this._instance.route || "",
                    dataIdPath: this._mapping.__dataIdPath
                }, this._bindingInfoSchema = {
                    schema: this._schema.schemaName,
                    id: t
                }, this._listenerId = this._table.addRowUpdateListener(t, function(t, n, i) {
                    if (e._id !== t.id) throw new Error("Internal Error. Id should not be changed.");
                    var a = i ? i.reactiveModel : null, s = {}, r = void 0;
                    r = config.enableArrayMappingShare ? util.getNormalArrayElementMapping(e._mapping) : e._mapping;
                    var o = e._getReversedMapping(r);
                    if (Object.keys(n).forEach(function(t) {
                        var i = o[t], a = util.getValueForPath(e._instance.data, i), r = n[t];
                        r !== a && void 0 !== r && (s[i] = r);
                    }), (Object.keys(s).length || a === e) && e._onUpdateFn) {
                        var _ = function _(e) {
                            Object.keys(e).forEach(function(t) {
                                s[t] = e[t];
                            });
                        };
                        e._mapping.__arrayPath__ ? e._onUpdateFn(util.clone(t), util.clone(n), _, e._mapping.__arrayPath__, e._mapping.__arrayIndex__) : e._onUpdateFn(util.clone(t), util.clone(n), _);
                    }
                    Object.keys(s).length && e._instance[constants.Name_Original_SetData](s), (Object.keys(s).length || a === e) && config.enableDebugLog && console.log("[binding] Update data, diff=", n, ". BindingInfo: ", e._bindingInfoPage, "<==>", e._bindingInfoSchema);
                }), this._bindingInfoSchema._listenerId = this._listenerId, config.enableDebugLog && console.log("[binding] Add binding", ". BindingInfo: ", this._bindingInfoPage, "<==>", this._bindingInfoSchema);
            }
        }
    }, {
        key: "unBindData",
        value: function value() {
            (this._id && void 0 !== this._listenerId && (this._table.removeRowUpdateListener(this._id, this._listenerId), 
            config.enableDebugLog && console.log("[binding] Remove binding", ". BindingInfo: ", this._bindingInfoPage, "<==>", this._bindingInfoSchema), 
            delete this._listenerId), this._instance) && (this._instance[constants.Name_Reactive_Models_Mapping_Tree].setPathModel(this._mapping.__dataIdPath, void 0), 
            delete this._instance);
        }
    }, {
        key: "onUpdate",
        value: function value(e) {
            return this._onUpdateFn = e, this;
        }
    }, {
        key: "onInsert",
        value: function value(e) {
            return this._onInsertFn = e, this;
        }
    }, {
        key: "setModelData",
        value: function value(e, t) {
            if (this._addListener(), config.enableDataShare && "ADD_BINDING" === t.from && !this._table.hasRow(this._id)) this._table.setRow(this._id, {
                id: this._id,
                __isLazyMappingValue__: !0,
                mapping: this._mapping,
                data: e,
                reactiveModel: this
            }, {
                reactiveModel: this,
                from: t.from
            }); else {
                var n = {}, i = void 0;
                if (i = config.enableArrayMappingShare ? util.getNormalArrayElementMapping(this._mapping) : this._mapping, 
                Object.keys(i).forEach(function(a) {
                    var s = i[a], r = void 0;
                    void 0 !== (r = "ADD_BINDING" === t.from ? util.getValueForPath(e, a) : util.getSetDataObjValueForPath(e, a)) && (n[s] = r);
                }), !Object.keys(n).length) return;
                "UPDATE_DATA_WITHOUT_ID_IN_SET_DATA" === t.from && config.enableDebugLog && console.log("[binding] setData", e), 
                this._table.mergeRow(this._id, n, {
                    reactiveModel: this,
                    from: t.from
                });
            }
            this._onInsertFn && "ADD_BINDING" === t.from && this._onInsertFn(this._table.getRow(this._id), this._mapping.__arrayPath__, this._mapping.__arrayIndex__);
        }
    }, {
        key: "getId",
        value: function value() {
            return this._id;
        }
    }, {
        key: "getListenerId",
        value: function value() {
            return this._listenerId;
        }
    } ]), e;
}();

module.exports = ReactiveModel;