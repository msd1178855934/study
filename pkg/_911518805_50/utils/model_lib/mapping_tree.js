var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var util = require("./util"), MappingTree = function() {
    function e() {
        _classCallCheck(this, e), this.root = {
            isRoot: 1,
            token: "",
            children: {}
        };
    }
    return _createClass(e, [ {
        key: "setPathModel",
        value: function value(e, t) {
            var n = this;
            if (util.isArray(t)) t.forEach(function(t, r) {
                n.setPathModel(e + "[" + r + "]", t);
            }); else {
                var r = util.getPathTokens(e), a = this.root;
                r.forEach(function(e) {
                    if (a.children[e]) a = a.children[e]; else {
                        var t = {
                            name: e,
                            children: {}
                        };
                        a.children[e] = t, a = t;
                    }
                }), a.data = t;
            }
        }
    }, {
        key: "getAllPathModels",
        value: function value() {
            return this.getPathModels("");
        }
    }, {
        key: "getPathModels",
        value: function value(e) {
            var t = this.root;
            if (e && e.length) {
                if (util.getPathTokens(e).some(function(e) {
                    if (!t.children[e]) return !0;
                    t = t.children[e];
                })) return [];
                if (t.data) return [ t.data ];
            }
            var n = [];
            n.push(t);
            for (var r = [], a = function a() {
                var e = n.pop();
                Object.keys(e.children).length && Object.keys(e.children).forEach(function(t) {
                    var r = e.children[t];
                    n.push(r);
                }), e.data && r.push(e.data);
            }; n.length; ) {
                a();
            }
            return r;
        }
    } ]), e;
}();

module.exports = MappingTree;