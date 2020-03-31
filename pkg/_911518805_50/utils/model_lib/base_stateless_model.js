var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(t, i, s) {
        return i && e(t.prototype, i), s && e(t, s), t;
    };
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var util = require("./util"), BaseStatelessModel = function() {
    function e(t) {
        if (_classCallCheck(this, e), this._schema = this.getSchema(), !this._schema) throw new Error("No schema for model");
        this._table = require("./table_manager").getTable(this._schema), this._id = t;
    }
    return _createClass(e, [ {
        key: "getSchema",
        value: function value() {
            return null;
        }
    }, {
        key: "getValue",
        value: function value() {
            return this._table.getRow(this._id);
        }
    }, {
        key: "setValue",
        value: function value(e) {
            util.isObject(e) && Object.keys(e).length && this._table.mergeRow(this._id, e);
        }
    }, {
        key: "resetValue",
        value: function value(e) {
            util.isObject(e) && Object.keys(e).length && this._table.setRow(this._id, e);
        }
    }, {
        key: "addUpdateListener",
        value: function value(e) {
            null != this._listenerId && this.clearOnUpdate(), this._listenerId = this._table.addRowUpdateListener(this._id, e);
        }
    }, {
        key: "removeUpdateListener",
        value: function value() {
            null != this._listenerId && (this._table.removeRowUpdateListener(this._id, this._listenerId), 
            this._listenerId = void 0);
        }
    } ]), e;
}();

module.exports = BaseStatelessModel;