require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 12 ], {
    109: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(18), r = a(2), i = a(16), s = a(120), c = a(64), o = a(15);
        const u = Object(n.a)(), p = r.i.pipe(Object(s.a)("screenWidth")), l = i.c.pipe(Object(c.a)(p), Object(o.a)(([t, e]) => 150 * t * (e / 750)));
        u.subscribe();
        var b = a(8), h = a(1), d = a(5);
        var f = function() {
            function t() {}
            return t.prototype.call = function(t, e) {
                return e.subscribe(new v(t));
            }, t;
        }(), v = function(t) {
            function e(e) {
                var a = t.call(this, e) || this;
                return a.hasPrev = !1, a;
            }
            return h.a(e, t), e.prototype._next = function(t) {
                var e;
                this.hasPrev ? e = [ this.prev, t ] : this.hasPrev = !0, this.prev = t, e && this.destination.next(e);
            }, e;
        }(d.a), x = a(60);
        let O = null;
        Object(b.a)({
            options: {
                styleIsolation: "apply-shared"
            },
            properties: {
                tabList: {
                    type: Array,
                    value: []
                },
                category_total: {
                    type: Number,
                    value: 5
                }
            },
            data: {
                tabLineOffset: 0,
                weuseActiveTabIndex: 0
            },
            getSubscriptions: () => ({
                animationData: l.pipe(function(t) {
                    return t.lift(new f());
                }, Object(x.a)(([t, e]) => t !== e), Object(c.a)(p), Object(o.a)(([[t, e], a]) => {
                    const n = {
                        transformOrigin: e - t > 0 ? "100% 100% 0" : "0 0 0",
                        timingFunction: "ease",
                        duration: 230
                    };
                    return Math.abs(e - t) > a / 5 ? (n.duration = 400, O.translateX(e).step(n)) : O.translateX(e).step(n), 
                    O.export();
                })),
                weuseActiveTabIndex: i.c
            }),
            attached() {
                O = wx.createAnimation();
            },
            methods: {
                handleTabClick(t) {
                    const {index: e} = t.currentTarget.dataset;
                    i.a.next(+e);
                },
                handleAllTabClick() {
                    u.next({
                        url: "../friends-use-all/friends-use-all"
                    });
                }
            }
        });
    }
}, [ [ 109, 0, 1 ] ] ]);
//# sourceMappingURL=friends-use-category-tab.js.map