require("./../../runtime"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 27 ], {
    73: function(e, t) {
        e.exports = function(e) {
            var t = {};
            function n(a) {
                if (t[a]) return t[a].exports;
                var i = t[a] = {
                    i: a,
                    l: !1,
                    exports: {}
                };
                return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
            }
            return n.m = e, n.c = t, n.d = function(e, t, a) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: a
                });
            }, n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            }, n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var a = Object.create(null);
                if (n.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var i in e) n.d(a, i, function(t) {
                    return e[t];
                }.bind(null, i));
                return a;
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default;
                } : function() {
                    return e;
                };
                return n.d(t, "a", t), t;
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, n.p = "", n(n.s = 1);
        }([ , function(e, t, n) {
            "use strict";
            let a = null;
            Component({
                options: {
                    multipleSlots: !0,
                    addGlobalClass: !0
                },
                properties: {
                    extClass: {
                        type: String,
                        value: ""
                    },
                    title: {
                        type: String,
                        value: ""
                    },
                    back: {
                        type: Boolean,
                        value: !0
                    },
                    loading: {
                        type: Boolean,
                        value: !1
                    },
                    animated: {
                        type: Boolean,
                        value: !0
                    },
                    show: {
                        type: Boolean,
                        value: !0,
                        observer: "_showChange"
                    },
                    delta: {
                        type: Number,
                        value: 1
                    },
                    isIndex: {
                        type: Boolean,
                        value: !1
                    }
                },
                data: {
                    displayStyle: "",
                    statusBarHeight: 20,
                    finished: !1
                },
                created() {
                    this.getSystemInfo$ = new Promise((e, t) => {
                        a ? e(a) : wx.getSystemInfo({
                            success: function(t) {
                                e(a = t);
                            },
                            fail() {
                                t();
                            }
                        });
                    });
                },
                attached: function() {
                    const e = this;
                    this.getSystemInfo$.then(t => {
                        e.setStyle(t);
                    }).catch(() => {
                        e.data({
                            finished: !0
                        });
                    });
                },
                methods: {
                    _showChange: function(e) {
                        var t = "";
                        t = this.data.animated ? "opacity: " + (e ? "1" : "0") + ";-webkit-transition:opacity 0.5s;transition:opacity 0.5s;" : "display: " + (e ? "" : "none"), 
                        this.setData({
                            displayStyle: t
                        });
                    },
                    back: function() {
                        if (this.properties.isIndex) wx.navigateBackNative(); else {
                            var e = this.data;
                            wx.navigateBack({
                                delta: e.delta
                            }), this.triggerEvent("back", {
                                delta: e.delta
                            }, {});
                        }
                    },
                    setStyle(e) {
                        var t = !!(e.system.toLowerCase().search("ios") + 1), n = !!wx.getMenuButtonBoundingClientRect;
                        this.setData({
                            ios: t,
                            statusBarHeight: e.statusBarHeight,
                            innerWidth: n ? "width:" + e.windowWidth + "px" : "",
                            innerPaddingRight: "",
                            leftWidth: "",
                            finished: !0
                        });
                    }
                }
            });
        } ]);
    }
}, [ [ 73, 0 ] ] ]);
//# sourceMappingURL=navigation-bar.js.map